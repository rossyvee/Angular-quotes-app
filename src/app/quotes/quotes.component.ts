import { Component, OnInit } from '@angular/core';
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
  new Quote(6, 'James','Weather Report','Astrology is like a weather report; it tells you what conditions you are likely to face in the future','LEE GOLDBERG',new Date(2022,4,14),0,0),
]

  constructor() { }

  ngOnInit(): void {
  }

}
