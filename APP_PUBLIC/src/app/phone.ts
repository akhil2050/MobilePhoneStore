import { Component, DirectiveDecorator, OnInit } from "@angular/core";
export class Phone {
    _id!: string;
    brand!: string;
    model!: string;
    price!: number;
    storage!: string;
    color!: string;
    sellers!: Seller;
}
export class Seller {
    _id!: string;
    sellerName!: string;
    email!: string;
    phoneNumber!: number;
}
