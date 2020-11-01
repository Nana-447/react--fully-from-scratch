# TECHNICAL NOTES / TIPS FOR CRWN - CLOTHING STORE

## [SASS](https://sass-lang.com/install)
- Install react SASS;
``yarn add node-sass``

- "&" = Append this aditional select (.menu-item:first-child)
- If you want, you can NEST classes on SASS:
```
.content {
      border: 0px solid black;

      .test{
            color: white;
      }
}
```

## PAGE COMPONENTS VS. COMPONENTS
- Page Component you will use it no more than once;

## FORMS
- Sign In has its own state;
- Register Log In has its own state;
- Those states do not talk to each other;

## SASS TIPS:
- Ways of refering a style inside another one;
- ``@mixin shrinkLabel {color: black};``
- ``&focus ~ .form-input-label{ @include shrinkLabel(); }``