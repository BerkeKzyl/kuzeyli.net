'use client';

import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link'

export const runtime = "edge"; 

function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.section}>
        <Image src="/images/whoami.png" alt="Mission" width={300} height={200} className={styles.image} />
        <div className={styles.textContainer}>
          <h2 className={styles.title}>WHO AM I?</h2>
          <p className={styles.description}> 2002 yılında Erzurumda dünyaya geldim, 2006 yılında, şuanda yaşadığımız yer olan İstanbul Pendik'e taşındık. İlk ve orta öğrenimlerimi yine burada tamamladım. Liseyi Cebir Anadolu lisesinde okudum, Üniversite eğitimimi İstanbul Okan Üniversitesinde bilgisayar mühendisliği öğrencisi olarak devam ettirmekteyim. Şuanda 4.sınıfım.</p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Experience</h2>
          <p className={styles.description}>
            Vakıf Katılım bankası'nın IT alanında, TABY şirketi aracılığıyla 5 ay süren bir staj deneyimim oldu. Bankacılık ekranlarının yapım, onarım ve geliştirme aşamalarında yer aldım. Bu süreçlerde C#, SQL ve özel bankacılık frameworkü olan BOA sistemini kullandık. 
          </p>
        </div>
        <Image src="/images/EXPERIENCE.png" alt="Experience" width={280} height={330} className={styles.image} />
      </div>
      <div className={styles.section}>
        <Image src="/images/EDCC.png" alt="Education" width={280} height={330} className={styles.image} />
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Education</h2>
          <p className={styles.description}>
            Liseyi Cebir Anadolu lisesinde okudum. 
          </p>
          <p className={styles.description}>
           İstanbul Okan Üniversitesi'nde ingilizce bilgisayar mühendisliği okumaktayım. 4.sınıfım.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Certificates</h2>
          <p>
            <Link href="https://www.credly.com/badges/de383ee8-4c80-487c-a623-85aa85b98e66/linked_in_profile">
              <span className={styles.link}>Akbank&Cisco Introduction to Cybersecurity</span>
            </Link>
          </p>
          <p>
            <Link href="https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjEzODY3Y2lkMzQ3cWlkOTBlbmQ=">
              <span className={styles.link}>Turkcell Python Programlama 101</span>
            </Link>
          </p>
          <p>
            <Link href="https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjEzODY3Y2lkNTY5cWlkMTEwZW5k">
              <span className={styles.link}>Turkcell HTML:101</span>
            </Link>
          </p>
          <p>
            <Link href="https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjEzODY3Y2lkMzYwNDBxaWQxMjVlbmQ=">
              <span className={styles.link}>Turkcell C# ile Algoritma ve Programlama</span>
            </Link>
          </p>
          <p>
            <Link href="https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjEzODY3Y2lkMzYwNDFxaWQxMjZlbmQ=">
              <span className={styles.link}>Turkcell C# ile Algoritma ve Programlama 201</span>
            </Link>
          </p>
          <p>
            <Link href="https://www.hackerrank.com/certificates/9f19fb9e46ed">
              <span className={styles.link}>HackerRank SQL (Intermediate)</span>
            </Link>
          </p>
        </div>
        <Image src="/images/certificatess.png" alt="Certificates" width={280} height={330} className={styles.image} />
      </div>
    </div>
  );
}

export default AboutPage;
