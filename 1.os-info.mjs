import {
  platform,
  release,
  arch,
  cpus,
  freemem,
  totalmem,
  uptime,
} from "node:os";

console.log("Información del sistema operativo");
console.log("---------------------");

console.log("NOmbre Sistema Operativo: ", platform());
console.log("Versión Sistema Operativo: ", release());
console.log("Arquitectura: ", arch());
console.log("CPUs: ", cpus());
console.log("Memoria Libre: ", freemem() / 1024 / 1024 / 1024);
console.log("Memoria Total: ", totalmem() / 1024 / 1024 / 1024);
console.log("Tiempo Equipo Encendido: ", uptime() / 60 / 60);
