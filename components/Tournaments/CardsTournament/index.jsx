import React from "react"
import { Card, Buyin, SpanBuyin, Stack, Blind, Late, Tournament, SpanLate, Guaranteed, Modalidade, Start} from "./style"

import moment from 'moment'

const convNumber = (value) => { 
    let initial = ''
    value = Number(value)
    if (value >= 1000000) initial = 'M'
    else if (value >= 1000) initial = 'K'
    else return value;
    const response = value / (initial === 'M' ? 1000000 : 1000);
    return `${response.toString().indexOf('.') > -1 ? response.toFixed(1) : response}${initial}`
}


export default function CardsTournament ({tournament}) {
    return (
        <Card>
            <Tournament>{tournament.name}</Tournament>
            <Start>| {moment(tournament.date).format('HH:mm')}</Start>
            <Guaranteed>{convNumber(tournament.guaranteed)}</Guaranteed>
            <Late>late</Late>
            <SpanLate>{moment(tournament.late).format('HH:mm')}</SpanLate>
            <Buyin>buy-in</Buyin>
            <SpanBuyin>{convNumber(tournament.buyin)}</SpanBuyin>
            <Modalidade>{tournament.type}</Modalidade>
            <Blind>blinds {tournament.temponivelmMeta} min</Blind>
            <Stack>stack {convNumber(tournament.stack)}</Stack>
        </Card>
    )
}