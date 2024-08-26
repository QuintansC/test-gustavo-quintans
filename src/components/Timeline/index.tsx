interface TimelineProps{
    shortVersion: boolean
}
const Timeline = ({ shortVersion }: TimelineProps)=>{
    return (
        <>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none  "> August 2022 - July de 2023 </time>
                    <h3 className="text-lg font-semibold  ">Analyst and Developer Systems</h3>
                    
                    {shortVersion? <></> :<p className="mb-4 text-base font-normal "> 
                        Internal Product support and maintenance, 
                        New features in React and Angular, 
                        Development of automated tests and unit tests, 
                        Front-end error reporting and assistance to the QA team
                    </p>}
                    
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none  ">January de 2022 - October de 2022</time>
                    <h3 className="text-lg font-semibold ">Analyst and Developer Systems</h3>
                    {shortVersion? <></> :<p className="text-base font-normal ">
                        Support and Innovation for E-Commerce Stores,
                        Maintenance and integration, GraphQL, AWS e Back-end on VTEX,
                        Deploys and Pull requests.
                    </p>}
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none">April 2022</time>
                    <h3 className="text-lg font-semibold">Software Developer</h3>
                    {shortVersion? <></> :<p className="text-base font-normal">
                        Manutenção de projetos em VTEX CMS,
                        Utilizado o modelo Kanban e Scrum.,
                        Responsável pela criação de Componentes e integração com VTEX IO.
                    </p>}
                </li>
            </ol>
        </>
    );
}

export default Timeline



