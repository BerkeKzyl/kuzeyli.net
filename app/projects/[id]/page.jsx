'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styles from './styles.module.css';
import AnimatedCards from '@/components/AnimatedCards';
import Link from 'next/link';

export const runtime = "edge"; 

const projectDetails = {
  'calculator': {
    title: 'Calculator',
    description: 'This is a detailed description for the Calculator project. It includes all the features and functionalities of the calculator.',
    images: ['/images/foto.jpg', '/images/calculator-2.jpg'],
    githubLink: 'https://github.com/username/calculator', // GitHub linkini ekleyin
  },
  'studentfinder': {
    title: 'StudentFinder',
    description: 'Bu proje, öğrenci işleri için tasarlanmış bir sistemdir. Kayıtlı bir hesapla sisteme girildikten sonra, öğrenci kayıt, sorgulama, düzennleme ve silme işlemleri yapılabiliyor. Tüm bunlar php yardımı ile Database kısmında tutuluyor. Bu Proje için SQL, HTML, JavaScript, CSS ve PHP kullanılmıştır.',
    images: ['/images/student1.jpg', '/images/student2.jpg', '/images/student3.jpg', '/images/student4.jpg', '/images/student5.jpg', '/images/student6.jpg'],
    githubLink: 'https://github.com/BerkeKzyl/StudentFinder', // GitHub linkini ekleyin
  },
  'culture-website': {
    title: 'Culture Website',
    description: 'Bu Proje Türkiyeyi tanıtmayı amaçlamaktadır. Giriş sayfasında ortada bulunan kare alanda, şuanda olan etkinlikler görsellerle sunulmaktadır, tıklandığında ilgili etkinlikle alakalı bilgilerin yer aldığı sayfaya yönlendirir. Müziklerin yer aldığı ve şehirlerin yer aldığı sayfalar da bulunmakta, şehirlerin yer aldığı sayfada "More Info" butonuna tıklandığında ilgili şehirle alakalı bilgi ve görsellerin yer aldığı sayfaya yönlendirir. Bu projece HTML, CSS ve JavaScript kullanılmıştır.',
    images: ['/images/gezgin1.jpg', '/images/gezgin2.jpg', '/images/gezgin3.jpg', '/images/gezgin4.jpg'],
    githubLink: 'https://github.com/BerkeKzyl/Cultural-Journey', // GitHub linkini ekleyin
  },
};

function ProjectPage() {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.projectPage}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div className={styles.imagesContainer}>
        <AnimatedCards images={project.images} />
      </div>
      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
        <img src="/images/icone-github.jpg" alt="GitHub Logo" className={styles.githubButton} />
      </Link>
    </div>
  );
}

export default ProjectPage;
