import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function CVPage() {
  return (
    <div className="container mx-auto p-4 bg-background text-foreground">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="md:col-span-1 space-y-6">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                RICARDO PAREDES CORNEJO
              </CardTitle>
              <p className="text-xl text-center">INGENIERO DE SOFTWARE</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-2">
                <p>andresparedescornejo@gmail.com</p>
                <p>+51 986 854 659</p>
                <p className="text-center">
                  Psje Ubaldo S/N, El Tambo - Huancayo, Junin, Peru
                </p>
                <a
                  href="https://www.linkedin.com/in/andres-paredes-dev/"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>

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
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>IDIOMAS</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Inglés | Nivel intermedio</li>
                <li>Español | Nativo</li>
              </ul>
            </CardContent>
          </Card>

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
          <Card>
            <CardHeader>
              <CardTitle>OBJETIVO PROFESIONAL</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A lo largo de mi carrera, he ocupado roles en Desarrollo de
                Software, Producción de Sistemas y Soporte Técnico,
                desarrollando una sólida experiencia en el diseño e
                implementación de soluciones destacando especialmente el uso de
                tecnologías como JavaScript tanto en el lado del Backend con
                NodeJs como del Frontend con NextJs, y la administración
                eficiente de Base de Datos, con énfasis en PostgreSQL.
              </p>
            </CardContent>
          </Card>

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
                ]}
              />

              <Separator />

              <JobExperience
                title="ANALISTA LÍDER DE PRODUCCIÓN DE SISTEMAS"
                company="Caja Centro, Huancayo, Junin"
                date="Dic 2023 - Ago 2024"
                responsibilities={[
                  "Experto en identificar y resolver problemas en la producción de sistemas de manera eficiente.",
                  "Atención oportuna de incidentes en entorno de producción.",
                  "Automatización de procesos y reportes.",
                ]}
              />

              <Separator />

              <JobExperience
                title="ANALISTA DE PRODUCCIÓN DE SISTEMAS"
                company="Caja Centro, Huancayo, Junin"
                date="May 2023 - Dic 2023"
                responsibilities={[
                  "Administración de las bases de datos desplegadas en producción.",
                  "Gestión y monitoreo de servidores en producción.",
                  "Desarrollo de aplicativo móvil para gestión de incidentes.",
                  "Ejecución y monitoreo del cierre diario.",
                ]}
              />

              <Separator />

              <JobExperience
                title="ANALISTA DE DESARROLLO DE SISTEMAS"
                company="Caja Centro, Huancayo, Junin"
                date="Feb 2023 - May 2023"
                responsibilities={[
                  "Analista de Desarrollo de Sistemas con más de 2 años de experiencia en la industria.",
                  "Amplio conocimiento en lenguajes de programación como JavaScript, C# y Flutter.",
                  "Experiencia en el diseño y desarrollo de bases de datos relacionales y no relacionales.",
                  "Atención de Requerimientos a necesidad de la empresa.",
                ]}
              />

              <Separator />

              <JobExperience
                title="INGENIERO DE SOFTWARE"
                company="AIBR KARAZ, Junín, Huancayo"
                date="Sep 2021 - Feb 2023"
                responsibilities={[
                  "Desarrollo de aplicaciones web utilizando tecnologías como Java, HTML, CSS y Javascript.",
                  "Experiencia en el diseño y desarrollo de bases de datos utilizando SQL y MongoDB.",
                  "Participación en proyectos de desarrollo ágil utilizando metodologías como Scrum.",
                  "Conocimiento de frameworks como Spring y Angular para el desarrollo de aplicaciones.",
                  "Desarrollo completo de un ERP INMOBILIARIO.",
                ]}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function JobExperience({ title, company, date, responsibilities }) {
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
    </div>
  );
}
