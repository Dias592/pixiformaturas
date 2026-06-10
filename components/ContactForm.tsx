'use client'

import { useState } from 'react'
import { BUSINESS } from '@/lib/constants'

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: '',
    escola: '',
    nivel: '9º Ano',
    data: '',
    bairro: '',
    mensagem: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Olá! Vim pelo site e gostaria de um orçamento para fotografia de formatura.
Nome: ${form.nome}
Escola: ${form.escola}
Nível de ensino: ${form.nivel}
Data prevista: ${form.data}
Cidade/Bairro: ${form.bairro}
Mensagem: ${form.mensagem}`

    const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'w-full rounded-lg border border-borderC bg-bg px-4 py-3 text-white placeholder:text-textMuted focus:border-gold focus:outline-none'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nome" className="mb-1 block text-sm text-textMuted">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          value={form.nome}
          onChange={handleChange}
          className={inputClass}
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="escola" className="mb-1 block text-sm text-textMuted">
          Escola
        </label>
        <input
          id="escola"
          name="escola"
          type="text"
          required
          value={form.escola}
          onChange={handleChange}
          className={inputClass}
          placeholder="Nome da escola"
        />
      </div>

      <div>
        <label htmlFor="nivel" className="mb-1 block text-sm text-textMuted">
          Nível de Ensino
        </label>
        <select id="nivel" name="nivel" value={form.nivel} onChange={handleChange} className={inputClass}>
          <option>9º Ano</option>
          <option>Ensino Médio</option>
          <option>Universitário</option>
        </select>
      </div>

      <div>
        <label htmlFor="data" className="mb-1 block text-sm text-textMuted">
          Data Prevista
        </label>
        <input
          id="data"
          name="data"
          type="text"
          value={form.data}
          onChange={handleChange}
          className={inputClass}
          placeholder="Ex: Outubro de 2026"
        />
      </div>

      <div>
        <label htmlFor="bairro" className="mb-1 block text-sm text-textMuted">
          Cidade/Bairro
        </label>
        <input
          id="bairro"
          name="bairro"
          type="text"
          value={form.bairro}
          onChange={handleChange}
          className={inputClass}
          placeholder="Ex: Moema, São Paulo"
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-1 block text-sm text-textMuted">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          value={form.mensagem}
          onChange={handleChange}
          className={inputClass}
          placeholder="Conte mais sobre a sua formatura"
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Enviar pelo WhatsApp ⊕
      </button>
    </form>
  )
}
