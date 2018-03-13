
import {group, query, trigger, state, animate, style, transition} from '@angular/animations';

export const slideToLeft = trigger(
    'routerTransition',
    [
      state(
      'void',
      style(
        {
          position: 'relative',
          width: '100%'
          }
        )
      ),
      state(
        '*',
        style({
          position: 'relative',
          width: '100%'
          }
        )
      ),
      transition(
        ':enter',
        [  // before 2.1: transition('void => *', [
          style({
            transform: 'translateX(100%)'
            }
          ),
          animate(
            '0.5s ease-in-out',
            style(
              {
              transform: 'translateX(0%)'
              }
            )
          )
        ]
      ),
      transition(':leave',
        [  // before 2.1: transition('* => void', [
        style(
          {
            transform: 'translateX(0%)'
          }
        ),
        animate(
          '0.5s ease-in-out',
          style(
            {
              transform: 'translateX(-100%)'
              }
            )
          )
        ]
      )
    ]
  );


export const fadeInContent = trigger('routeState', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: 0 })
      ], { optional: true }
    ),
    group([
      query(':leave', [
          animate(300, style({ opacity: 0 }))
        ],
        { optional: true }
      ),
      query(':enter', [
          style({ opacity: 0 }),
          animate(300, style({ opacity: 1 }))
        ],
        { optional: true }
      )
    ])
  ])
]);


export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    /* order */
    /* 1 */ query(':enter, :leave', style({ position: 'relative', width: '100%' })
      , { optional: true }),
    /* 2 */ group([  // block executes in parallel
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))], { optional: true }),
    ])
  ])
])
