# Proxy
監聽物件操作，監聽set和get

## Object.defineProperty缺點
01. 初衷不是拿來設置和監聽值的，主要是拿來描述物件中的屬性的。

## Proxy
可以監聽具體的操作，可以在handler中添加對應的捕捉器trap。

## Reflect
提供很多JS操作物件的方法,有點像是Object中操作物件的方法。