export default class CookieStorage implements Storage {
  readonly length: number;

  constructor() {
    this.length = this.getAllCookies().length;
  }

  clear() {
    const cookies = this.getAllCookies();
    for (const cookie of cookies) {
      this.removeItem(cookie.name);
    }
  }

  getItem(key: string) {
    const cookies = this.getAllCookies();
    const chunks = cookies.filter((c) => c.name.startsWith(`${key}_`));
    if (chunks.length > 0) {
      const chunkValues = chunks.map((chunk) => chunk.value);
      return chunkValues.join("");
    } else {
      const cookie = cookies.find((c) => c.name === key);
      return cookie?.value || null;
    }
  }

  key(index: number) {
    const cookies = this.getAllCookies();
    return index >= 0 && index < cookies.length ? cookies[index].name : null;
  }

  removeItem(key: string) {
    const cookies = this.getAllCookies();
    const chunks = cookies.filter((c) => c.name.startsWith(`${key}_`));
    for (const chunk of chunks) {
      document.cookie = `${chunk.name}=; expires=${new Date(
        0
      ).toUTCString()}; path=/;`;
    }
    document.cookie = `${key}=; expires=${new Date(0).toUTCString()}; path=/;`;
  }

  setItem(key: string, value: string) {
    this.removeItem(key);
    const maxCookieSize = 3 * 1024; // 3kb
    if (value.length <= maxCookieSize) {
      this.setCookie(key, value);
    } else {
      const chunks = this.splitValue(value, maxCookieSize);
      for (let i = 0; i < chunks.length; i++) {
        this.setCookie(`${key}_${i + 1}`, chunks[i]);
      }
    }
  }

  private setCookie(key: string, value: string) {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    const options = {
      expires: `expires=${date.toUTCString()}`,
      path: "path=/",
      sameSite: "SameSite=Strict",
      secure:
        process.env.NEXT_PUBLIC_PIPELINE_ENV === "production" ? "Secure" : "",
    };
    document.cookie = `${key}=${value}; ${Object.values(options).join("; ")}`;
  }

  private splitValue(value: string, maxSize: number) {
    const chunks = [];
    for (let i = 0; i < value.length; i += maxSize) {
      chunks.push(value.slice(i, i + maxSize));
    }
    return chunks;
  }

  private getAllCookies() {
    const cookies = document.cookie.split(";").map((cookie) => {
      const [name, value] = cookie.trim().split("=");
      return { name, value };
    });
    return cookies;
  }
}
