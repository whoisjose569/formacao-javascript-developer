const nota1 = 3;
const nota2 = 3;
const nota3 = 3;
const media = (nota1 + nota2 + nota3) / 3

if (media > 7) {
    console.log("Passou");
} else if (media >= 5 && media <= 7) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}