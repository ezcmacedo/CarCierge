import React, { useState } from 'react';

const QuemSomos = () => {
    const [currentContent, setCurrentContent] = useState(0);

    const content = [
        {

            
            foto: "https://live.staticflickr.com/65535/53774375694_58e20e0254_o.png",
            title: "NOSSA HISTÓRIA",
            text: (
                <>
                    <p className="text-gray-700 mb-4 text-justify">
                        A Carcierge nasceu de uma visão singular e de uma paixão compartilhada por veículos de luxo e serviço excepcional. Tudo começou quando dois amigos de infância, Lucas e Sofia, ambos apaixonados por automóveis, se reuniram para discutir uma ideia que estava borbulhando em suas mentes há anos.
                    </p>
                    <p className="text-gray-700 mb-4 text-justify">
                        Lucas, com sua experiência em gestão de negócios e Sofia, uma entusiasta do mundo automobilístico, decidiram unir forças para criar algo verdadeiramente especial. A inspiração veio de suas próprias experiências, percebendo uma lacuna no mercado de locação de carros de luxo.
                    </p>
                    <p className="text-gray-700 mb-4 text-justify">
                        Ambos compartilhavam o mesmo desejo de oferecer mais do que apenas veículos de luxo aos seus clientes. Queriam criar uma experiência verdadeiramente memorável, onde o luxo e o serviço excepcional fossem os pilares fundamentais. Assim, em uma tarde de primavera, nasceu a Carcierge.
                    </p>
                </>
            ),
        },
        {
            foto: "https://live.staticflickr.com/65535/53774054626_6ae0eef41e_o.png",
            title: "NOSSA VISÃO",
            text: (
                <>
                    <p className="text-gray-700 mb-4 text-justify">
                        A visão da Carcierge é se tornar a principal referência em locação de carros de luxo, blindados e para eventos em todo o país. Mais do que simplesmente fornecer veículos de prestígio, buscamos criar uma conexão emocional com nossos clientes, proporcionando experiências inesquecíveis e um serviço personalizado incomparável.
                    </p>
                    <p className="text-gray-700 mb-4 text-justify">
                        Queremos ser reconhecidos não apenas pela qualidade de nossos carros, mas também pela dedicação em exceder as expectativas de nossos clientes em cada interação. Nosso objetivo é ser muito mais do que uma empresa de locação de carros; aspiramos ser os arquitetos de momentos especiais e memórias duradouras.
                    </p>
                </>
            ),
        },
        {
            foto: "https://live.staticflickr.com/65535/53774255628_a39daf9c6c_o.png",
            title: "NOSSOS VALORES",
            text: (
                <ul className="list-decimal list-inside text-gray-700 mb-4 text-justify">
                    <li className="mb-2">
                        <strong>Excelência:</strong> Comprometemo-nos com a excelência em tudo o que fazemos, desde a manutenção de nossa frota até a prestação de serviços aos nossos clientes. Buscamos a perfeição em cada detalhe, sempre buscando superar as expectativas.
                    </li>
                    <li className="mb-2">
                        <strong>Integridade:</strong> Operamos com os mais altos padrões éticos e morais, mantendo a transparência em todas as nossas interações. Valorizamos a confiança depositada em nós por nossos clientes e nos esforçamos para merecê-la em cada transação.
                    </li>
                    <li className="mb-2">
                        <strong>Inovação:</strong> Estamos sempre em busca de novas maneiras de surpreender e encantar nossos clientes. Abraçamos a inovação em tecnologia, serviço e experiência do cliente, mantendo-nos à frente das tendências e exigências do mercado.
                    </li>
                    <li className="mb-2">
                        <strong>Paixão pelo Cliente:</strong> Colocamos nossos clientes no centro de tudo o que fazemos. Estamos dedicados a compreender suas necessidades individuais e a superar suas expectativas, proporcionando um serviço personalizado e atencioso em todos os momentos.
                    </li>
                </ul>
            ),
        },
    ];

    const handleNextContent = () => {
        setCurrentContent((prevContent) => (prevContent + 1) % content.length);
    };

    const nextContentIndex = (currentContent + 1) % content.length;
    const buttonText = content[nextContentIndex].title;

    return (
        <div className="w-[80%] mx-auto my-auto py-28 font-inter">
            <div className="flex flex-row bg-white rounded-lg shadow-lg overflow-hidden items-center">
                <img src={content[currentContent].foto} alt="Car" className="h-[100%]" />
                <div className='flex flex-col p-6 text-center justify-between'>
                    <h2 className="text-2xl font-bold mb-4">{content[currentContent].title}</h2>
                    <div>{content[currentContent].text}</div>
                    <button onClick={handleNextContent} className="max-w-[30%] bg-[#B68322] text-white px-4 py-2 rounded-lg m-auto">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuemSomos;
