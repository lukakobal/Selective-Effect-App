# React 91 – Dependency Control

## 🎯 Kaj sem se naučil

- Kako dependency array nadzoruje izvajanje useEffect
- Kako preprečiti nepotrebne efekte
- Kako deluje selektivno sprožanje

## ⚙️ Koncept

useEffect se sproži samo, ko se spremeni vrednost v dependency array.

## 🧠 Pomembno

Če spremeniš state, ki je v dependency array, se effect ponovno sproži.

https://codesandbox.io/p/sandbox/z98h42?file=%2Fsrc%2FApp.js%3A1%2C1-33%2C1
