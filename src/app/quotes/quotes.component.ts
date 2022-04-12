import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
title = 'Welcome to astrology quotes';
quotes: Quote[]=[
  new Quote(1, 'Rose','Millionaire','Anyone can be a millionaire, but to become a billionaire you need an astrologer.','J. P. Morgan',new Date(2022,4,9),0,0),
  new Quote(2, 'Peter','Revelation','Astrology reveals the will of the gods','Juvenal',new Date(2022,4,10),0,0),
  new Quote(3, 'Maureen','Tales','Astrology is one of the oldest and most accurate tools known to mankind','Chris Flisher',new Date(2022,4,11),0,0),
  new Quote(4, 'Bruno','Physician','Astrology is a Language. If you understand this language, The Sky Speaks to You','Dane Rudhyar',new Date(2022,4,13),0,0),
  new Quote(5, 'James','Weather Report','Astrology is like a weather report, it tells you what conditions you are likely to face in the future','Lee Goldberg',new Date(2022,4,14),0,0),
  new Quote(6, 'Nolan',' Report','Astrology is a disease, not a science','Lee Goldberg',new Date(2022,4,14),0,0),

]

  constructor() { }

  ngOnInit(): void {
  }

  quoteForm = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
    quote: new FormControl(''),
    author: new FormControl(''),
  });

  saveQuote():void{
    const formValues = this.quoteForm.value
    const quote = new Quote(this.quotes.length+2,formValues.name, formValues.title, formValues.quote, formValues.author, new Date(),0,0)
    console.log(formValues)
    this.quotes.unshift(quote)
  }

  deleteQuote(quoteId:number):void{
    this.quotes = this.quotes.filter(quote=>quote.id!=quoteId)
  }
  processVotes(quoteId:number, action:string):void {
    let q:Quote[] =this.quotes.map(function(param:Quote){
      if(param.id==quoteId){
        if(action == "increase"){
          param.likes+=1
        }
        if(action == "decrease"){
          param.dislike+=1
        }
      }
      return param
    })

    console.log(q);
    

    this.quotes = q
  }

}
