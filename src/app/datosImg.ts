export class datosImagen{
    fecha:Date;
    nombre: string;
    descripcion: string;
    link: string;

    constructor(fecha:Date,
        nombre: string,
        descripcion: string,
        link: string,){
            this.descripcion = descripcion,
            this.nombre = nombre,
            this.fecha = fecha,
            this.link=link

    }
}