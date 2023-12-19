import Image from 'next/image'
import { Button } from '@nextui-org/react'
'use client'
import React from 'react';
import EventForm from './components/make-a-event';
import '../app/components/styles/event.css'
import GerenciadorPremios from './components/Gerenciador';
import MakeAEventOpcoes from './components/MakeAEventOpcoes';

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto items-center justify-center p-24">
      <div>
        <h1 className='text-black font-inter text-3xl font-bold leading-normal'>Dados Basicos</h1>
        <h3 className='text-black font-inter font-normal text-opacity-60 leading-normal'>Insira os dados de como deseja a sua campanha abaixo:</h3>
       <EventForm/>
      </div>
    </main>
  );
}

