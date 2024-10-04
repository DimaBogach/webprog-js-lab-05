function slugify(title) {
    return title
        .toLowerCase()                     // Перетворюємо на нижній регістр
        .trim()                            // Видаляємо пробіли з початку і кінця
        .replace(/\s+/g, '-')              // Замінюємо пробіли на тире
        .replace(/[^\w-]+/g, '');          // Видаляємо всі символи, які не є буквами, цифрами або тире
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
