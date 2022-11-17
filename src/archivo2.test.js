const {
    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    deEuroAdolar,
}=require("./index2.js");

describe('multiplica(x, y)', function(){
    it("Deberia devolver la multiplicacion de x*y", function(){
        expect(multiplica(5, 8)).toBe(40);
        expect(multiplica(2, 3)).toBe(6);
    });
});

describe('divide(x, y)', function(){
    it("Deberia devolver la division de x/y", function(){
        expect(divide(10, 2)).toBe(5);
        expect(divide(144, 12)).toBe(12);
    });
});

describe('sonIguales(x, y)', function(){
    it("Deberia devolver la igualdad de x=y", function(){
        expect(sonIguales(10, 10)).toBe(10);
        expect(sonIguales(6, 6)).toBe(6);
    });
});

describe('tienenMismaLongitud(str1, str2)', function(){
    it("Deberia tener la misma longitud de str1=str2", function(){
        expect(tienenMismaLongitud(12, 12));
        expect(tienenMismaLongitud(50, 50));
    });
});

describe('menosQueNoventa(num)', function(){
    it("Tiene que devolver true si es menor a 90, o false si es mayor que 90", function(){
        expect(menosQueNoventa(89)).toBe(true);
        expect(menosQueNoventa(91)).toBe(false);
    });
});

describe('mayorQueCincuenta(num)', function(){
    it("Tiene que devolver true si es mayor a 50, o false si es menor que 50", function(){
        expect(mayorQueCincuenta(51)).toBe(true);
        expect(mayorQueCincuenta(49)).toBe(false);
    });
});

describe('obtenerResto(x, y)', function(){
    it("Tiene que devolver los restos de la division x%y", function(){
        expect(obtenerResto(21, 5)).toBe(1);
        expect(obtenerResto(10, 2)).toBe(0);
    });
});

describe('esPar(num)', function(){
    it("Tiene que devolver si el numero es par", function(){
        expect(esPar(16)).toBe(true);
        expect(esPar(95)).toBe(false);
    });
});

describe('esImpar(num)', function(){
    it("Tiene que devolver si el numero es impar", function(){
        expect(esImpar(41)).toBe(true);
        expect(esImpar(66)).toBe(false);
    });
});

describe('elevar(num, exponent)', function(){
    it("Tiene que devolver elevado al exponente dado", function(){
        expect(elevar(7, 2)).toBe(49);
        expect(elevar(8, 1/3)).toBe(2);
    });
});

describe('redondearNumero(num)', function(){
    it("Tiene que devolver el redondeo del numero", function(){
        expect(redondearNumero(85.2)).toBe(85);
        expect(redondearNumero(-43.2)).toBe(-43);
    });
});

describe('redondearHaciaArriba(num)', function(){
    it("Tiene que devolver el redondeo hacia arriba (al próximo entero)", function(){
        expect(redondearHaciaArriba(85.2)).toBe(86);
        expect(redondearHaciaArriba(26.8)).toBe(27);
    });
});

describe('numeroRandom()', function(){
    it("Tiene que devolver un numero aleatorio", function(){
        expect(numeroRandom());
    });
});
describe('esPositivo(numero)', function(){
    it("Tiene que devolver un numero aleatorio", function(){
        expect(esPositivo(10)).toBe(true);
        expect(esPositivo(-1)).toBe(false);
    });
});

describe('combinarNombres(nombre, apellido)', function(){
    it("Tiene que devolver el nombre combinado ", function(){
        expect(combinarNombres("Giomar", "Castro")).toBe("GiomarCastro");
        expect(combinarNombres("Rodrigo", "Bautista")).toBe("RodrigoBautista");
    });
});

describe('obtenerSaludo(nombre)', function(){
    it("Tiene que devolver el saludo ", function(){
        expect(obtenerSaludo("Giomar")).toBe("¡Hola!, Soy"+ "Giomar");
        expect(obtenerSaludo("Rodrigo")).toBe("¡Hola!, Soy"+ "Rodrigo");
    });
});

describe('obtenerAreaRectangulo(alto, ancho)', function(){
    it("Tiene que devolver el area del Rectangulo ", function(){
        expect(obtenerAreaRectangulo(15, 10)).toBe(150);
        expect(obtenerAreaRectangulo(12, 8)).toBe(96);
    });
});

describe('retornarPerimetro(lado)', function(){
    it("Tiene que devolver el perimetro de un Cuadrado", function(){
        expect(retornarPerimetro(8)).toBe(32);
        expect(retornarPerimetro(24)).toBe(96);
    });
});

describe('deEuroAdolar(euro)', function(){
    it("Tiene que devolver el valor a dolar cambiado del euro", function(){
        expect(deEuroAdolar(1)).toBe(1.2);
        expect(deEuroAdolar(50)).toBe(60);
    });
});