import { Dispatch } from "react"

export interface IProduct {
    id : number
    name : string
    price : number
    pic : string
}

export interface IBasketItem extends IProduct {
    count : number
}

export interface IState {
    products : IProduct[]
    basket : IBasketItem[]
}

export interface IAction {
    type : string
    payload? : unknown
}

export interface IContext {
    state : IState
    dispatch : Dispatch<IAction>
}