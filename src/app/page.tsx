import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Flag from "react-world-flags";

export default function CVPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 bg-background text-foreground">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="md:col-span-1 space-y-6">
          {/* Profile Card */}
          <Card className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg">
            <CardHeader>
              <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
                <Image
                  src="/profile.jpeg"
                  alt="Profile"
                  className="rounded-full"
                  height={128}
                  width={128}
                />
                <div>
                  <CardTitle className="text-4xl font-extrabold">
                    RICARDO PAREDES CORNEJO
                  </CardTitle>
                  <p className="text-xl">Ingeniero de Software</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-2">
                <ContactInfo
                  href="mailto:andresparedescornejo@gmail.com"
                  icon={<FaEnvelope aria-label="Correo electrónico" />}
                  text="andresparedescornejo@gmail.com"
                />
                <ContactInfo
                  href="tel:+51986854659"
                  icon={<FaPhone aria-label="Teléfono" />}
                  text="+51 986 854 659"
                />
                <ContactInfo
                  href="#"
                  icon={<FaMapMarkerAlt aria-label="Ubicación" />}
                  text="Psje Ubaldo S/N, El Tambo - Huancayo"
                />
              </div>
            </CardContent>
          </Card>

          {/* Habilidades */}
          <Card>
            <CardHeader>
              <CardTitle>HABILIDADES</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Base de datos",
                  "Programación",
                  "Desarrollo web",
                  "Análisis de sistemas",
                  "Administración de proyectos",
                  "Arquitectura de software",
                  "Solución de problemas",
                  "Gestión de equipos",
                  "Habilidades de comunicación",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="hover:scale-105 transition-transform"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Lenguajes de Programación */}
          <Card>
            <CardHeader>
              <CardTitle>LENGUAJES DE PROGRAMACIÓN</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <SkillBar skill="JavaScript" level={90} />
                <SkillBar skill="C#" level={85} />
                <SkillBar skill="Java" level={80} />
                <SkillBar skill="Python" level={50} />
              </div>
            </CardContent>
          </Card>

          {/* Frameworks */}
          <Card>
            <CardHeader>
              <CardTitle>FRAMEWORKS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <SkillBar skill="Express" level={90} />
                <SkillBar skill=".NET" level={90} />
                <SkillBar skill=".Net Core" level={88} />
                <SkillBar skill="Angular" level={80} />
                <SkillBar skill="React" level={80} />
                <SkillBar skill="Flutter" level={70} />
                <SkillBar skill="Spring" level={50} />
              </div>
            </CardContent>
          </Card>

          {/* Idiomas */}
          <Card>
            <CardHeader>
              <CardTitle>IDIOMAS</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <LanguageItem
                  countryCode="US"
                  text="Inglés | Nivel intermedio"
                />
                <LanguageItem countryCode="ES" text="Español | Nativo" />
              </ul>
            </CardContent>
          </Card>

          {/* Educación */}
          <Card>
            <CardHeader>
              <CardTitle>EDUCACIÓN</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold">INGENIERO DE SOFTWARE</h4>
              <p>
                Pontificia Universidad Católica del Peru, Lima, Peru | Mar 2017
                - Jul 2022
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Objetivo Profesional */}
          <Card>
            <CardHeader>
              <CardTitle>Sobre mi</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Ingeniero de Software graduado de la Pontificia Universidad
                Católica del Perú. A lo largo de mi carrera, he ocupado roles en
                Desarrollo de Software, Producción de Sistemas y Soporte
                Técnico, desarrollando una sólida experiencia en el diseño e
                implementación de soluciones tecnológicas. Mi enfoque se centra
                en la excelencia técnica, destacando especialmente en el uso de
                tecnologías como JavaScript, C# y la administración eficiente de
                bases de datos, con énfasis en PostgreSQL. Apasionado por la
                resolución creativa de problemas y siempre buscando aprender y
                crecer en el siempre cambiante mundo de la tecnología.
              </p>
            </CardContent>
          </Card>

          {/* Experiencia Profesional */}
          <Card>
            <CardHeader>
              <CardTitle>EXPERIENCIA PROFESIONAL</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <JobExperience
                title="ANALISTA DE DESARROLLO DE SISTEMAS"
                company="Enchufate SAC"
                date="Sep 2024 - Actualidad"
                responsibilities={[
                  "Desarrollo ágil Scrum",
                  "Gestión de Aplicaciones WEB con MVC .NET 6",
                  "Desarrollo de sistemas Universitarios",
                ]}
                details="Desarrollo de sistemas universitarios, con un enfoque en la eficiencia y la escalabilidad. Trabajo en un equipo ágil utilizando Scrum, desarrollando aplicaciones web con .NET 6."
              />

              <Separator />

              <JobExperience
                title="ANALISTA LÍDER DE PRODUCCIÓN DE SISTEMAS"
                company="Caja Centro, Huancayo, Junin"
                date="Dic 2023 - Ago 2024"
                responsibilities={[
                  "Identificación y resolución de problemas en la producción.",
                  "Automatización de procesos y reportes.",
                ]}
                details={
                  "Experiencia en el sector financiero, gestionando despliegues a producción y automatizando diversos procesos operativos. Amplia experiencia en la administración de bases de datos y servidores, incluyendo la optimización y mejora de la replicación en servidores PostgreSQL. Enfoque en la eficiencia, seguridad y continuidad de las operaciones."
                }
              />

              <Separator />

              <JobExperience
                title="ANALISTA DE PRODUCCIÓN DE SISTEMAS"
                company="Caja Centro, Huancayo, Junin"
                date="May 2023 - Dic 2023"
                responsibilities={[
                  "Administración de bases de datos en producción.",
                  "Gestión y monitoreo de servidores.",
                  "Desarrollo de aplicativo móvil para gestión de incidentes.",
                ]}
                details={
                  "Desarrollé una aplicación móvil para la gestión de incidentes comunes en producción, lo que permitió resolver problemas de manera más eficiente y oportuna, incluso fuera del horario de oficina. La aplicación fue creada utilizando Flutter para el frontend, con un backend desarrollado en .NET 6 y PostgreSQL como motor de base de datos."
                }
              />

              <Separator />

              <JobExperience
                title="ANALISTA DE DESARROLLO DE SISTEMAS"
                company="Caja Centro, Huancayo, Junin"
                date="Feb 2023 - May 2023"
                responsibilities={[
                  "Analista de Desarrollo de Sistemas con más de 2 años de experiencia en la industria",
                  "Amplio conocimiento en lenguajes de programación como JavaScript, C# y Flutter",
                  "Experiencia en el diseño y desarrollo de bases de datos relacionales y no relacionales",
                  "Atención de requerimientos a necesidades de negocio",
                ]}
                details={
                  "Ingresé al sector financiero como Analista de Desarrollo de Sistemas, donde pude aplicar mis conocimientos en el desarrollo de aplicaciones web y móviles. Trabajé con aplicaciones de escritorio en Visual Fox Pro y desarrollé los sistemas empresariales utilizando .NET, Node.js y Angular. Además, estuve a cargo del desarrollo de funcionalidades para la aplicación móvil en Flutter."
                }
              />

              <Separator />

              <JobExperience
                title="INGENIERO DE SOFTWARE"
                company="AIBR KARAZ, Junín, Huancayo"
                date="Nov 2021 - Ene 2023"
                responsibilities={[
                  "Desarrollo de aplicaciones web con Java y Spring.",
                  "Diseño de bases de datos con SQL y MongoDB.",
                  "Desarrollo de un ERP inmobiliario completo.",
                ]}
                details="Desarrollé un ERP completo para una empresa inmobiliaria, utilizando Spring y Angular, que integró todas las áreas de la empresa. Este sistema mejoró significativamente la eficiencia operativa, optimizando procesos y reduciendo tiempos de gestión."
              />

              <Separator />
              {/* <JobExperience
                title="ADMINISTRADOR DE BASE DE DATOS"
                company="Teleatento del Perù SAC"
                date="Abr 2021 - Sep 2021"
                responsibilities={[
                  "Mantenimiento, administración y gestión de bases de datos.",
                ]}
                details={
                  "Responsable de la administración y mantenimiento de bases de datos, incluyendo la gestión de usuarios, permisos y la optimización de consultas. Cuento con experiencia trabajando con bases de datos tanto relacionales como no relacionales, como MySQL y MongoDB, asegurando un rendimiento óptimo y la integridad de los datos."
                }
              /> */}
              <Separator />
              <JobExperience
                title="Analista de Sistemas"
                company="TEXTIMAX SAC"
                date="Ene 2020 - Abr 2021"
                responsibilities={[
                  "Desarrollo de aplicaciones web con Java  8",
                  "Desarrollo de aplicacion con VB.NET",
                  "Diseño de bases de datos con SQLServer",
                ]}
                details="Desarrollé aplicaciones de escritorio para la empresa utilizando Java y VB.NET, optimizando la experiencia del usuario y los procesos internos. Además, participé en el diseño y gestión de bases de datos relacionales, implementando soluciones eficientes con SQL Server."
              />
              <Separator />
              {/* <JobExperience
                title="Practicante"
                company="TEXTIMAX SAC"
                date="Jul 2019 - Ene 2020"
                responsibilities={[
                  "Desarrollo de aplicaciones web con Java  8",
                  "Desarrollo de aplicacion con VB.NET",
                  "Diseño de bases de datos con SQLServer",
                  "Soporte técnico",
                  "Mantenimiento de equipos",
                ]}
                details="Inicié mi carrera en el mundo IT como practicante en Textimax, donde apliqué mis conocimientos en el desarrollo de aplicaciones web y de escritorio. Además, brindé soporte técnico a los usuarios, realizando mantenimiento preventivo y correctivo de equipos de cómputo, así como diagnósticos y reparación de impresoras y PCs."
              /> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
function SkillBar({ skill, level }: { skill: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function ContactInfo({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

function LanguageItem({
  countryCode,
  text,
}: {
  countryCode: string;
  text: string;
}) {
  return (
    <li className="inline-flex items-center space-x-2 mx-2">
      <Flag code={countryCode} className="w-6 h-4 rounded shadow-sm" />
      <span>{text}</span>
    </li>
  );
}

function JobExperience({
  title,
  company,
  date,
  responsibilities,
  details,
}: {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
  details?: string;
}) {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-muted-foreground">
        {company} | {date}
      </p>
      <ul className="list-disc list-inside space-y-1">
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
      <div className="mt-2 text-sm text-muted-foreground">
        <h5 className="font-semibold">Detalles:</h5>
        <p>{details}</p>
      </div>
    </div>
  );
}
