function getValue(tall: number, weight: number) {
    const bmi: number = weight / (tall * tall)
 if (bmi <= 18.50) {
    return 'thin'
 } else if (bmi <= 22.90) {
    return 'normal'
 } else if (bmi <= 24.90) {
    return 'Obesity grade 1'
 } else if (bmi <= 29.90) {
    return 'Obesity grade 2'
 } else (bmi >= 30) ;
    return 'Obesity grade 3'
}

console.log (getValue(1.73, 102))