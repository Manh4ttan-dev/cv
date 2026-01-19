import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

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
                  <p className="text-xl">Desarrollador Full Stack</p>
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
                  text="Huancayo, Junín, Perú"
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
                  "Desarrollo Web Full Stack",
                  "Arquitectura de Microservicios",
                  "DevOps & CI/CD",
                  "Bases de datos SQL/NoSQL",
                  "Infraestructura Cloud (AWS)",
                  "Contenedores Docker",
                  "Desarrollo de APIs REST",
                  "Tecnologías Educativas (Ed-Tech)",
                  "Trabajo en equipo",
                  "Resolución de problemas",
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
                <SkillBar skill="JavaScript/TypeScript" level={95} />
                <SkillBar skill="C#" level={90} />
                <SkillBar skill="PHP" level={85} />
                <SkillBar skill="Java" level={80} />
                <SkillBar skill="Python" level={60} />
              </div>
            </CardContent>
          </Card>

          {/* Frameworks */}
          <Card>
            <CardHeader>
              <CardTitle>FRAMEWORKS & TECNOLOGÍAS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <SkillBar skill="Laravel (PHP)" level={85} />
                <SkillBar skill="React / React Native" level={85} />
                <SkillBar skill=".NET Core" level={90} />
                <SkillBar skill="Node.js / Express" level={90} />
                <SkillBar skill="Angular" level={80} />
                <SkillBar skill="Flutter" level={75} />
              </div>
            </CardContent>
          </Card>

          {/* Bases de Datos */}
          <Card>
            <CardHeader>
              <CardTitle>BASES DE DATOS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <SkillBar skill="PostgreSQL" level={90} />
                <SkillBar skill="MySQL / MariaDB" level={85} />
                <SkillBar skill="MongoDB" level={85} />
                <SkillBar skill="SQL Server" level={80} />
              </div>
            </CardContent>
          </Card>

          {/* DevOps & Infraestructura */}
          <Card>
            <CardHeader>
              <CardTitle>DEVOPS & INFRAESTRUCTURA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Docker",
                  "Docker Swarm",
                  "GitLab CI/CD",
                  "AWS (EC2, S3, ECS)",
                  "Linux (Ubuntu/Debian)",
                  "Nginx",
                  "Apache",
                  "Terraform",
                ].map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
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
                <LanguageItem text="Español | Nativo" />
                <LanguageItem text="Inglés | Nivel intermedio (lectura técnica avanzada)" />
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Objetivo Profesional */}
          <Card>
            <CardHeader>
              <CardTitle>PERFIL PROFESIONAL</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Desarrollador Full Stack con más de 5 años de experiencia en el
                diseño, desarrollo e implementación de soluciones tecnológicas.
                Especializado en el desarrollo de plataformas educativas
                (Ed-Tech) y sistemas empresariales, con sólida experiencia en
                arquitectura de microservicios, DevOps y gestión de
                infraestructura cloud. Actualmente participo en el desarrollo de
                AKDEMIC, una plataforma educativa que sirve a múltiples
                universidades en Perú. Apasionado por crear soluciones
                tecnológicas que impacten positivamente en la educación y el
                aprendizaje.
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
                title="DESARROLLADOR FULL STACK & DEVOPS"
                company="Enchufate SAC"
                date="Sep 2024 - Actualidad"
                responsibilities={[
                  "Desarrollo y mantenimiento de AKDEMIC, plataforma educativa que sirve a múltiples universidades peruanas",
                  "Implementación de arquitectura de microservicios con Docker Swarm (16 módulos independientes)",
                  "Diseño e implementación de pipelines CI/CD con GitLab para despliegues automatizados",
                  "Desarrollo de módulos con PHP/Laravel y .NET Core según requerimientos",
                  "Integración de pasarelas de pago y generación de certificados PDF",
                  "Gestión de bases de datos PostgreSQL y MongoDB en producción",
                  "Desarrollo del sistema contable CONTASOFT con funcionalidades de reportería financiera",
                ]}
                technologies={[
                  "PHP 8",
                  "Laravel",
                  ".NET Core",
                  "Docker",
                  "GitLab CI/CD",
                  "PostgreSQL",
                  "MongoDB",
                  "React",
                  "TypeScript",
                  "AWS",
                  "Nginx",
                ]}
                details="Participo activamente en el desarrollo de una plataforma Ed-Tech que gestiona procesos académicos, administrativos y financieros para universidades. Implementé la infraestructura DevOps con contenedores Docker y pipelines de CI/CD, reduciendo significativamente los tiempos de despliegue y mejorando la estabilidad del sistema."
              />

              <Separator />

              <JobExperience
                title="ANALISTA LÍDER DE PRODUCCIÓN DE SISTEMAS"
                company="Caja Centro, Huancayo"
                date="Dic 2023 - Ago 2024"
                responsibilities={[
                  "Gestión de despliegues a producción en entornos Linux",
                  "Automatización de procesos operativos y reportes con scripts",
                  "Administración y optimización de bases de datos PostgreSQL",
                  "Configuración y mantenimiento de replicación de servidores",
                  "Monitoreo de infraestructura y resolución de incidentes críticos",
                ]}
                technologies={[
                  "PostgreSQL",
                  "Linux",
                  "Docker",
                  "PHP",
                  "Shell Scripting",
                  "Nginx",
                ]}
                details="Responsable de la estabilidad y disponibilidad de los sistemas en producción del sector financiero. Implementé mejoras en la replicación de bases de datos y automaticé procesos críticos, reduciendo tiempos de respuesta ante incidentes."
              />

              <Separator />

              <JobExperience
                title="ANALISTA DE PRODUCCIÓN DE SISTEMAS"
                company="Caja Centro, Huancayo"
                date="May 2023 - Dic 2023"
                responsibilities={[
                  "Administración de bases de datos PostgreSQL y MongoDB en producción",
                  "Gestión y monitoreo de servidores Linux",
                  "Desarrollo de aplicativo móvil para gestión de incidentes con Flutter",
                  "Soporte técnico y resolución de problemas reportados por usuarios",
                ]}
                technologies={[
                  "Flutter",
                  ".NET 6",
                  "PostgreSQL",
                  "MongoDB",
                  "Linux",
                  "Docker",
                ]}
                details="Desarrollé una aplicación móvil que permitió resolver incidentes de producción de manera remota, mejorando los tiempos de respuesta significativamente. Backend desarrollado en .NET 6 con PostgreSQL."
              />

              <Separator />

              <JobExperience
                title="ANALISTA DE DESARROLLO DE SISTEMAS"
                company="Caja Centro, Huancayo"
                date="Feb 2023 - May 2023"
                responsibilities={[
                  "Desarrollo de aplicaciones web con PHP y .NET",
                  "Desarrollo de funcionalidades para aplicación móvil en Flutter",
                  "Diseño e implementación de APIs REST con Node.js",
                  "Mantenimiento de sistemas legacy en Visual Fox Pro",
                ]}
                technologies={[
                  "PHP",
                  ".NET",
                  "Node.js",
                  "Angular",
                  "Flutter",
                  "MySQL",
                  "MongoDB",
                ]}
                details="Participé en el desarrollo de múltiples sistemas empresariales del sector financiero, incluyendo aplicaciones web y móviles. Trabajé con stack tecnológico diverso adaptándome a las necesidades del negocio."
              />

              <Separator />

              <JobExperience
                title="DESARROLLADOR DE SOFTWARE"
                company="AIBR KARAZ, Huancayo"
                date="Nov 2021 - Ene 2023"
                responsibilities={[
                  "Desarrollo de ERP inmobiliario completo con Spring y Angular",
                  "Diseño de arquitectura de base de datos con MySQL y MongoDB",
                  "Desarrollo de APIs REST y servicios backend con Java/Spring",
                  "Implementación de módulos de gestión de ventas, inventario y clientes",
                ]}
                technologies={[
                  "Java",
                  "Spring Boot",
                  "Angular",
                  "MySQL",
                  "MongoDB",
                  "Docker",
                ]}
                details="Desarrollé desde cero un ERP completo que integró todas las áreas operativas de una empresa inmobiliaria, mejorando significativamente la eficiencia en la gestión de propiedades, clientes y transacciones."
              />

              <Separator />

              <JobExperience
                title="ANALISTA DE SISTEMAS"
                company="TEXTIMAX SAC, Lima"
                date="Ene 2020 - Abr 2021"
                responsibilities={[
                  "Desarrollo de aplicaciones web con Java y PHP",
                  "Desarrollo de aplicaciones de escritorio con VB.NET",
                  "Diseño y administración de bases de datos SQL Server y MySQL",
                  "Integración de sistemas y automatización de procesos",
                ]}
                technologies={["Java", "PHP", "VB.NET", "SQL Server", "MySQL"]}
                details="Desarrollé soluciones tecnológicas para optimizar procesos operativos en el sector textil, incluyendo aplicaciones de gestión de inventario y producción."
              />
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
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full transition-all"
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
      className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
    >
      {icon}
      <span className="text-sm">{text}</span>
    </a>
  );
}

function LanguageItem({ text }: { text: string }) {
  return (
    <li className="flex items-center space-x-2">
      <span>{text}</span>
    </li>
  );
}

function JobExperience({
  title,
  company,
  date,
  responsibilities,
  technologies,
  details,
}: {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
  technologies?: string[];
  details?: string;
}) {
  return (
    <div className="space-y-3">
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-sm text-muted-foreground">
          {company} | {date}
        </p>
      </div>

      <ul className="list-disc list-inside space-y-1 text-sm">
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>

      {technologies && (
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      )}

      {details && (
        <p className="text-sm text-muted-foreground italic">{details}</p>
      )}
    </div>
  );
}
