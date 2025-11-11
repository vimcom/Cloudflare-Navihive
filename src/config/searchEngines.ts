/**
 * 搜索引擎配置
 */

export interface SearchEngine {
  key: string; // 唯一键
  name: string; // 显示名称
  template: string; // URL 模板，{q} 会被替换为查询关键词
  icon?: string; // 图标 URL (可选)
  locale?: string; // 地区/语言参数
}

/**
 * 预设的搜索引擎列表
 */
export const SEARCH_ENGINES: SearchEngine[] = [
  {
    key: 'google',
    name: 'Google',
    template: 'https://www.google.com/search?q={q}',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iI0ZGQzEwNyIgZD0iTTQzLjYxMSwyMC4wODNINDJWMjBIMjR2OGgxMS4zMDNjLTEuNjQ5LDQuNjU3LTYuMDgsOC04Ni4zMDMsOGMtNi42MjcsMC0xMi01LjM3My0xMi0xMnM1LjM3My0xMiwxMi0xMmMzLjA1OSwwLDUuODQyLDEuMTU0LDcuOTYxLDMuMDM5bDUuNjU3LTUuNjU3QzM0LjA0Niw2LjA1MywyOS4yNjgsNCwyNCw0QzEyLjk1NSw0LDQsMTIuOTU1LDQsMjRzOC45NTUsMjAsMjAsMjBzMjAtOC45NTUsMjAtMjBDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiIvPjxwYXRoIGZpbGw9IiNGRjNEMDAiIGQ9Ik02LjMwNiwxNC42OTFsNi41NzEsNC44MTlDMTQuNjU1LDE1LjEwOCwxOC45NjEsMTIsMjQsMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYsNi4wNTMsMjkuMjY4LDQsMjQsNEMxNi4zMTgsNCw5LjY1Niw4LjMzNyw2LjMwNiwxNC42OTF6Ii8+PHBhdGggZmlsbD0iIzRDQUY1MCIgZD0iTTI0LDQ0YzUuMTY2LDAsOS44Ni0xLjk3NywxMy40MDktNS4xOTJsLTYuMTktNS4yMzhDMjkuMjExLDM1LjA5MSwyNi43MTUsMzYsMjQsMzZjLTUuMjAyLDAtOS42MTktMy4zMTctMTEuMjgzLTcuOTQ2bC02LjUyMiw1LjAyNUM5LjUwNSwzOS41NTYsMTYuMjI3LDQ0LDI0LDQ0eiIvPjxwYXRoIGZpbGw9IiMxOTc2RDIiIGQ9Ik00My42MTEsMjAuMDgzSDQyVjIwSDI0djhoMTEuMzAzYy0wLjc5MiwyLjIzNy0yLjIzMSw0LjE2Ni00LjA4Nyw1LjU3MWMwLjAwMS0wLjAwMSwwLjAwMi0wLjAwMSwwLjAwMy0wLjAwMmw2LjE5LDUuMjM4QzM2Ljk3MSwzOS4yMDUsNDQsMzQsNDQsMjRDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiIvPjwvc3ZnPg==',
  },
  {
    key: 'baidu',
    name: '百度',
    template: 'https://www.baidu.com/s?wd={q}',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjAiIGZpbGw9IiMyMzE5REMiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjcuNSAxOGMxLjQgMCAyLjUtMS4xIDIuNS0yLjVTMjguOSAxMyAyNy41IDEzczEuMS0yLjUgMi41LTIuNVMyNyAxNy42IDI3IDE5IDI2LjEgMjAuNSAyNC43IDIwLjVjLTEuNCAwLTIuNS0xLjEtMi41LTIuNXMxLjEtMi41IDIuNS0yLjV6bS01IDJjMS40IDAgMi41IDEuMSAyLjUgMi41UzIzLjkgMjUgMjIuNSAyNSAyMCAyMy45IDIwIDIyLjUgMjEuMSAyMCAyMi41IDIwem0tNiAzYzEuNyAwIDMgMS4zIDMgM3MtMS4zIDMtMyAzLTMtMS4zLTMtM3MxLjMtMyAzLTN6bTE4IDBjMS43IDAgMyAxLjMgMyAzcy0xLjMgMy0zIDMtMy0xLjMtMy0zczEuMy0zIDMtM3ptLTkgNWM0LjQgMCA4IDIuNyA4IDZzLTMuNiA2LTggNi04LTIuNy04LTYgMy42LTYgOC02eiIvPjwvc3ZnPg==',
  },
  {
    key: 'bing',
    name: 'Bing',
    template: 'https://www.bing.com/search?q={q}',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMjQiIHgyPSIyNCIgeTE9IjQiIHkyPSI0NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzM3YWVlMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFlOTZjOCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTkgNGwyIDMybDEzIDhjMCAwIDEzLTggMTMtOGwxLTE3eiIvPjxwYXRoIGZpbGw9IiMxZTMyNjQiIGQ9Ik05IDRsMTMgOC02IDI0eiIvPjxwYXRoIGZpbGw9IiMyYjU3OTciIGQ9Ik0yMiAxMmwxMCA2LTYgMTh6Ii8+PC9zdmc+',
  },
  {
    key: 'duckduckgo',
    name: 'DuckDuckGo',
    template: 'https://duckduckgo.com/?q={q}',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjAiIGZpbGw9IiNkZTVhMzMiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjQgOGMtOC44IDAtMTYgNy4yLTE2IDE2czAsMTYgMCAxNmg4di04aDhWMTZjMC04LjgtNy4yLTE2LTE2LTE2em0wIDIwYy0yLjIgMC00LTEuOC00LTRzMS44LTQgNC00IDQgMS44IDQgNC0xLjggNC00IDR6bTgtMTJjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyem0tMTYgMGMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6Ii8+PC9zdmc+',
  },
  {
    key: 'github',
    name: 'GitHub',
    template: 'https://github.com/search?q={q}&type=repositories',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iIzIxMjEyMSIgZD0iTTI0IDRDMTIuOTU0IDQgNCA4Ljk1NCA0IDIwYzAgNy4wNzQgNC41NjUgMTMuMDY3IDEwLjkwMiAxNS4xODMuOC4xNDggMS4wOTQtLjM0NyAxLjA5NC0uNzcgMC0uMzc5LS4wMTQtMS42NTQtLjAyMi0yLjk5Mi00LjQ1Ni45NjgtNS4zOTUtMS45MTQtNS4zOTUtMS45MTQtLjcyOC0xLjg0OC0xLjc3NS0yLjMzOS0xLjc3NS0yLjMzOS0xLjQ1Mi0uOTkyLjExLS45NzIuMTEtLjk3MiAxLjYwNi4xMTMgMi40NSAxLjY0OSAyLjQ1IDEuNjQ5IDEuNDI3IDIuNDQ1IDMuNzQ1IDEuNzM5IDQuNjU2IDEuMzMuMTQ1LTEuMDM0LjU1OC0xLjczOSAxLjAxNS0yLjEzOS0zLjU1Mi0uNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2IDAtMS43NDcuNjI0LTMuMTc1IDEuNjQ2LTQuMjkyLS4xNjYtLjQwMy0uNzE0LTIuMDMuMTU2LTQuMjMyIDAgMCAxLjM0Mi0uNDMgNC4zOTggMS42MzggMS4yOC0uMzU2IDIuNjUtLjUzNCA0LjAxMy0uNTQgMS4zNjMuMDA2IDIuNzMyLjE4NCA0LjAxMi41NCAzLjA1Ni0yLjA2OCA0LjM5OC0xLjYzOCA0LjM5OC0xLjYzOC44Ny0yLjIwMi4zMjItMy44MjkuMTU2LTQuMjMyIDEuMDIyIDEuMTE3IDEuNjQ2IDIuNTQ1IDEuNjQ2IDQuMjkyIDAgNi4xNDYtMy43MzYgNy40OTYtNy4yOTYgNy44OTMuNTcyLjQ5NCAxLjA4MyAxLjQ2NyAxLjA4MyAyLjk1NyAwIDIuMTM1LS4wMTkgMy44NTYtLjAxOSA0LjM4IDAgLjQyNy4yODguOTI3IDEuMS43N0MzNS40MjggMzMuMDU2IDQwIDI3LjA2NyA0MCAyMGMwLTExLjA0Ni04Ljk1NC0xNi0yMC0xNnoiLz48L3N2Zz4=',
  },
  {
    key: 'bilibili',
    name: '哔哩哔哩',
    template: 'https://search.bilibili.com/all?keyword={q}',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzAwYTFkNiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMiAyMGMwLTIgMS0zIDMtM2gxOGMyIDAgMyAxIDMgM3YxMmMwIDItMSAzLTMgM0gxNWMtMiAwLTMtMS0zLTN6bTYgMGgtNHY4aDR6bTggMGgtNHY4aDR6bTggMGgtNHY4aDR6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE2IDEybDItM2gydjNtMTQgMGwyLTNoMnYzIi8+PC9zdmc+',
  },
  {
    key: 'youtube',
    name: 'YouTube',
    template: 'https://www.youtube.com/results?search_query={q}',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iI0ZGMDAwMCIgZD0iTTQzLjIgMTQuMmMtLjUtMS45LTItMy40LTMuOS0zLjktMy41LS45LTE3LjMtLjktMTcuMy0uOXMtMTMuOCAwLTE3LjMuOWMtMS45LjUtMy40IDItMy45IDMuOUM0LjggMTcuNyA0LjggMjQgNC44IDI0czAgNi4zLjkgOS44Yy41IDEuOSAyIDMuNCAzLjkgMy45IDMuNS45IDE3LjMuOSAxNy4zLjlzMTMuOCAwIDE3LjMtLjljMS45LS41IDMuNC0yIDMuOS0zLjkuOS0zLjUuOS05LjguOS05LjhzMC02LjMtLjktOS44ek0xOSAzMVYxN2wxMiA3LTEyIDd6Ii8+PC9zdmc+',
  },
  {
    key: 'zhihu',
    name: '知乎',
    template: 'https://www.zhihu.com/search?type=content&q={q}',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzAwNmZmZiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMiAxMmg4djIwaC04em0xMiAwaDh2OGgtOHptMCAxMmg4djhoLTh6Ii8+PC9zdmc+',
  },
];

/**
 * 获取默认搜索引擎
 */
export function getDefaultSearchEngine(): SearchEngine {
  const defaultEngine = SEARCH_ENGINES[0];
  if (!defaultEngine) {
    throw new Error('No search engines available');
  }
  return defaultEngine;
}

/**
 * 根据 key 获取搜索引擎
 */
export function getSearchEngineByKey(key: string): SearchEngine {
  return SEARCH_ENGINES.find((engine) => engine.key === key) || getDefaultSearchEngine();
}

/**
 * 构建搜索 URL
 */
export function buildSearchUrl(engine: SearchEngine, query: string): string {
  const encodedQuery = encodeURIComponent(query.trim());
  return engine.template.replace('{q}', encodedQuery);
}

/**
 * 检测输入是否为 URL
 */
export function isUrl(input: string): boolean {
  // 简单的 URL 检测：包含 . 且不含空格，或以 http:// https:// 开头
  const urlPattern = /^(https?:\/\/|www\.)/i;
  const domainPattern = /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/;

  return urlPattern.test(input) || domainPattern.test(input);
}

/**
 * 规范化 URL（自动补全 https://）
 */
export function normalizeUrl(input: string): string {
  if (!/^https?:\/\//i.test(input)) {
    return `https://${input}`;
  }
  return input;
}
