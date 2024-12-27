import { TipoContato } from '../utils/enums/contato'

export class Contato {
  titulo: string
  tipoContato: TipoContato
  telefone: number
  email: string
  redes: string
  id: number

  constructor(
    titulo: string,
    tipoContato: TipoContato,
    telefone: number,
    email: string,
    redes: string,
    id: number
  ) {
    this.titulo = titulo
    this.tipoContato = tipoContato
    this.telefone = telefone
    this.email = email
    this.redes = redes
    this.id = id
  }
}
