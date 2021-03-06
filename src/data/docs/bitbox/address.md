---
title: Address
icon: qrcode
ordinal: 3
---

### `toLegacyAddress`

Converting cashaddr to legacy address format

#### Arguments

1.  address `String` cashaddr address to be converted

#### Result

legacyAddress `String` legacy base 58 check encoded address

#### Examples

      // mainnet w/ prefix
      BITBOX.Address.toLegacyAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
      // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

      // mainnet w/ no prefix
      BITBOX.Address.toLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
      // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

      // testnet w/ prefix
      BITBOX.Address.toLegacyAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // mqc1tmwY2368LLGktnePzEyPAsgADxbksi

      // testnet w/ no prefix
      BITBOX.Address.toLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // mqc1tmwY2368LLGktnePzEyPAsgADxbksi

### `toCashAddress`

Converting legacy to cashAddress format

#### Arguments

1.  address `String` required: legacy address to be converted
2.  prefix `Boolean` optional: include prefix
3.  regtest `Boolean` optional: return regtest address

#### Result

cashAddress `String` cashAddr encoded address

#### Examples

      // mainnet
      BITBOX.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
      // bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

      // mainnet no prefix
      BITBOX.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN', false)
      // qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

      // tesnet
      BITBOX.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
      // bchtest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3

      // testnet no prefix
      BITBOX.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
      // qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3

### `isLegacyAddress`

Detect if legacy base58check encoded address

#### Arguments

1.  address `String`: address to determine

#### Result

isLegacyAddress `Boolean`: true/false if legacy address

#### Examples

      // cashaddr
      BITBOX.Address.isLegacyAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // false

      // w/ no cashaddr prefix
      BITBOX.Address.isLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
      // false

      // legacy
      BITBOX.Address.isLegacyAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
      // true

      // testnet w/ cashaddr prefix
      BITBOX.Address.isLegacyAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // false

      // testnet w/ no cashaddr prefix
      BITBOX.Address.isLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // false

      // legacy testnet
      BITBOX.Address.isLegacyAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // true

### `isCashAddress`

Detect if cashAddr encoded address

#### Arguments

1.  address `String`: address to determine

#### Result

isCashAddress `Boolean`: true/false if cashaddress

#### Examples

      // mainnet cashaddr
      BITBOX.Address.isCashAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // true

      // mainnet w/ no cashaddr prefix
      BITBOX.Address.isCashAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // true

      // mainnet legacy
      BITBOX.Address.isCashAddress('18HEMuar5ZhXDFep1gEiY1eoPPcBLxfDxj')
      // false

      // testnet w/ cashaddr prefix
      BITBOX.Address.isCashAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // true

      // testnet w/ no cashaddr prefix
      BITBOX.Address.isCashAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // true

      // testnet legacy
      BITBOX.Address.isCashAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // false

### `isMainnetAddress`

Detect if mainnet address

#### Arguments

1.  address `String`: address to determine

#### Result

isMainnetAddress `Boolean`: true/false if mainnet address

#### Examples

      // mainnet cashaddr
      BITBOX.Address.isMainnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // true

      // mainnet cashaddr w/ no prefix
      BITBOX.Address.isMainnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // true

      // mainnet legacy
      BITBOX.Address.isMainnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
      // true

      // testnet cashaddr
      BITBOX.Address.isMainnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // false

      // testnet w/ no cashaddr prefix
      BITBOX.Address.isMainnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // false

      // testnet legacy
      BITBOX.Address.isMainnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // false

### `isTestnetAddress`

Detect if testnet address

#### Arguments

1.  addresss `String`: address to determine

#### Result

isTestnetAddresss `Boolean`: true/false if is testnet address

#### Examples

      // cashaddr mainnet
      BITBOX.Address.isTestnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      //false

      // w/ no cashaddr prefix
      BITBOX.Address.isTestnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // false

      // legacy mainnet
      BITBOX.Address.isTestnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
      // false

      // cashaddr testnet
      BITBOX.Address.isTestnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // true

      // testnet w/ no cashaddr prefix
      BITBOX.Address.isTestnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // true

      // testnet legacy
      BITBOX.Address.isTestnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // true

### `isP2PKHAddress`

Detect if p2pkh address

#### Arguments

1.  address `String` address to determine

#### Result

isP2PKHAddress `Boolean` true/false if is p2pkh address

#### Examples

      // cashaddr
      BITBOX.Address.isP2PKHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // true

      // w/ no cashaddr prefix
      BITBOX.Address.isP2PKHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // true

      // legacy
      BITBOX.Address.isP2PKHAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
      // true

      // legacy testnet
      BITBOX.Address.isP2PKHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // true

      // testnet w/ no cashaddr prefix
      BITBOX.Address.isP2PKHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // true

      // legacy testnet
      BITBOX.Address.isP2PKHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // true

### `isP2SHAddress`

Detect if p2sh address

#### arguments

1.  address `String` address to determine

#### Result

isP2SHAddress `Boolean` true/false if is p2sh address

#### Examples

      // cashaddr
      BITBOX.Address.isP2SHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // false

      // cashaddr w/ no prefix
      BITBOX.Address.isP2SHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // false

      // legacy
      BITBOX.Address.isP2SHAddress('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
      // false

      // cashaddr testnet
      BITBOX.Address.isP2SHAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // false

      // cashaddr testnet w/ no prefix
      BITBOX.Address.isP2SHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // false

      // legacy testnet
      BITBOX.Address.isP2SHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // false

### `detectAddressFormat`

Detect address format

#### arguments

1.  address `String` address to determine format

#### Result

addressFormat `String` address format

#### Examples

      // cashaddr
      BITBOX.Address.detectAddressFormat('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // cashaddr

      // cashaddr w/ no prefix
      BITBOX.Address.detectAddressFormat('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // cashaddr

      // legacy
      BITBOX.Address.detectAddressFormat('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
      // legacy

      // cashaddr testnet
      BITBOX.Address.detectAddressFormat('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // cashaddr

      // cashaddr testnet w/ no prefix
      BITBOX.Address.detectAddressFormat('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // cashaddr

      // legacy testnet
      BITBOX.Address.detectAddressFormat('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // legacy

### `detectAddressNetwork`

Detect address network

#### arguments

1.  address `String` address to determine network

#### Result

addressNetwork `String` address network

#### Examples

      // cashaddr
      BITBOX.Address.detectAddressNetwork('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // mainnet

      // cashaddr w/ no prefix
      BITBOX.Address.detectAddressNetwork('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
      // mainnet

      // legacy
      BITBOX.Address.detectAddressNetwork('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
      // mainnet

      // cashaddr testnet
      BITBOX.Address.detectAddressNetwork('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // testnet

      // cashaddr testnet w/ no prefix
      BITBOX.Address.detectAddressNetwork('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // testnet

      // legacy testnet
      BITBOX.Address.detectAddressNetwork('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // testnet

### `detectAddressType`

Detect address network

#### arguments

1.  address `String` address to determine network

#### Result

addressNetwork `String` address network

#### Examples

      // cashaddr
      BITBOX.Address.detectAddressType('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
      // p2pkh

      // cashaddr w/ no prefix
      BITBOX.Address.detectAddressType('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
      // p2pkh

      // legacy
      BITBOX.Address.detectAddressType('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74');
      // p2pkh

      // cashaddr testnet
      BITBOX.Address.detectAddressType('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy');
      // p2pkh

      // cashaddr testnet w/ no prefix
      BITBOX.Address.detectAddressType('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy');
      // p2pkh

      // legacy testnet
      BITBOX.Address.detectAddressType('mqc1tmwY2368LLGktnePzEyPAsgADxbksi');
      // p2pkh

### `fromXPub`

Generates an address for an extended public key (xpub)

#### Arguments

1.  xpub `String`: extended public key to be used
2.  path `String` `optional`: derivation path of external change address. Default is `0/0`

#### Result

changeAddress `String`: cashaddr encoded change address

#### Examples

      // generate 5 external change addresses for xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA
      let xpub = 'xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA';
      for(let i = 0; i <= 4; i++) {
        BITBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // bitcoincash:qptnmya5wkly7xf97wm5ak23yqdsz3l2cyj7k9vyyh
      // bitcoincash:qrr2suh9yjsrkl2qp3p967uhfg6u0r6xxsn9h5vuvr
      // bitcoincash:qpkfg4kck99wksyss6nvaqtafeahfnyrpsj0ed372t
      // bitcoincash:qppgmuuwy07g0x39sx2z0x2u8e34tvfdxvy0c2jvx7
      // bitcoincash:qryj8x4s7vfsc864jm0xaak9qfe8qgk245y9ska57l

      // generate 5 external change addresses for xpub6DLXtM9JjvtUTm6TngeSXZdeKfFqA1sLYoFQMTTXYYbwDw55eTy7uhconrzw8mW1zzmpMBYpQLpBPzRdSn9Hxrse5TTnpdtcoeXahkC6bPd
      let xpub = 'xpub6DLXtM9JjvtUTm6TngeSXZdeKfFqA1sLYoFQMTTXYYbwDw55eTy7uhconrzw8mW1zzmpMBYpQLpBPzRdSn9Hxrse5TTnpdtcoeXahkC6bPd';
      for(let i = 0; i <= 4; i++) {
        BITBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // bitcoincash:qpm05nr0fmxmyhlz0qermkad0zvsfsqu6ckv6e5tzr
      // bitcoincash:qre28yd5msvsenn9qj5fwm3k3u00dty4ac739zhw2k
      // bitcoincash:qp0utfskvcnsy2whkurk25x247jcdmexqyekzury66
      // bitcoincash:qqzjwx6zdvhkwalzvnaprwk73me9szqvgspgu6shst
      // bitcoincash:qzpcg6atgg36vrkwvklw9325nqzdcxd8c5dl5l6k79

      // generate 5 external change addresses for xpub6DLXtM9JjvtUV1i6tBdQ6RCwYHoUjzK2GL1BmXf4TW8QbFGWueMJrwRUsZntEUBfpqJACiid1PEPNbDVTRZxyGKp5k8KsHVg27nDR1Makdh
      let xpub = 'xpub6DLXtM9JjvtUV1i6tBdQ6RCwYHoUjzK2GL1BmXf4TW8QbFGWueMJrwRUsZntEUBfpqJACiid1PEPNbDVTRZxyGKp5k8KsHVg27nDR1Makdh';
      for(let i = 0; i <= 4; i++) {
        BITBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // bitcoincash:qrykz97x24tgz9nq29yyqcc98nqj8k2n45jg57manf
      // bitcoincash:qp8e7rrajx3wscqr6zfu3mvnlkmt0s4dhqldpqscym
      // bitcoincash:qrw6fhr6nl5lh9srh9a9sr890r3zzsgt7sqh7tkyve
      // bitcoincash:qqj9ctz9sex3xjapgm8hv5dkpfmf7aalrs2z2jprm2
      // bitcoincash:qzytws9yvyqgsx3smfyy3yaq5xw9jt0xsy7kpnqpth

      // generate 5 external change addresses for xpub6DLXtM9JjvtUa9tPGP5kYXnGGeo3dnBuhUZP7QmE97hKxM1EizDgFZgVe8M5Nv49z5ytpAnwwNcc16wChnecpj3KyFPkufbi9uZaj5ALCGm
      let xpub = 'xpub6DLXtM9JjvtUa9tPGP5kYXnGGeo3dnBuhUZP7QmE97hKxM1EizDgFZgVe8M5Nv49z5ytpAnwwNcc16wChnecpj3KyFPkufbi9uZaj5ALCGm';
      for(let i = 0; i <= 4; i++) {
        BITBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // bitcoincash:qp9e7kd6pgy7pek2vemfspm6vc544xzm2yjfezst3q
      // bitcoincash:qqt9g8ggmd5kxccvuye0nv7enj6syqqxyymnrhgkep
      // bitcoincash:qqr8qf8qj7yxgtaydkt5xp0lw4fnu56jmy7q5k9sat
      // bitcoincash:qzaf69rhsnzfjtg0ydw2qlqeyhpnsfzz4ghr5jkrzy
      // bitcoincash:qrwjhc0dujvjtrl0e0zc8tkhwxfvljvamc6e0kcj3w

      // generate 5 external change addresses for xpub6DLXtM9JjvtUkiaWLnfiSHjW51vspUW7GDmkML17w2qoEeGztYYSmotgXJpwmoNCc6QbdCXWySEWki7jURV46hmN6MXwem1aNo3gxhkjJPj
      let xpub = 'xpub6DLXtM9JjvtUkiaWLnfiSHjW51vspUW7GDmkML17w2qoEeGztYYSmotgXJpwmoNCc6QbdCXWySEWki7jURV46hmN6MXwem1aNo3gxhkjJPj';
      for(let i = 0; i <= 4; i++) {
        BITBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // bitcoincash:qzrfwca03gzgwgxsjcxfphuckztc9squ9vmws99sr7
      // bitcoincash:qrr0ykn2xwy80hl0p7vnm44l5sc43x5245nlrfc74c
      // bitcoincash:qr3zlplv2w0t3s92twldjk432f45agls0qj35tyqtc
      // bitcoincash:qqxf90phz7ysrj53tymq6qvmquk0kd04wvjf6s83nv
      // bitcoincash:qrygumzwu7anzppyzcraa2tal3vlzc7p3smyh5cdth

### `fromOutputScript`

Detect an addess from an OutputScript.

#### Arguments

1.  scriptPubKey `Buffer`: scriptPubKey
2.  network `String` **optional**: defaults to "mainnet"

#### Result

changeAddress `String`: cashaddr encoded change address

#### Examples

      const script = BITBOX.Script.encode([
        Buffer.from("BOX", "ascii"),
        BITBOX.Script.opcodes.OP_CAT,
        Buffer.from("BITBOX", "ascii"),
        BITBOX.Script.opcodes.OP_EQUAL
      ]);
      const p2sh_hash160 = BITBOX.Crypto.hash160(script);
      const scriptPubKey = BITBOX.Script.scriptHash.output.encode(p2sh_hash160);

      // mainnet address from output script
      BITBOX.Address.fromOutputScript(scriptPubKey);
      // bitcoincash:pz0qcslrqn7hr44hsszwl4lw5r6udkg6zqncnufkrl

      // testnet address from output script
      BITBOX.Address.fromOutputScript(scriptPubKey, 'testnet');
      // bchtest:pz0qcslrqn7hr44hsszwl4lw5r6udkg6zqh2hmtpyr

### `isHash160`

Detect if an addess is a hash160.

#### Arguments

1.  address `String`: address

#### Result

isHash160 `Boolean`: true/false if address is hash160

#### Examples

      let hash160Address = '428df38e23fc879a25819427995c3e6355b12d33';
      BITBOX.Address.isHash160(hash160Address);
      // true

      let notHash160Address = 'bitcoincash:pz8a837lttkvjksg0jjmmulqvfkgpqrcdgufy8ns5s';
      BITBOX.Address.isHash160(notHash160Address);
      // false

### `details`

Return details about an address including balance.

#### Arguments

- addresses (required):
  - `String`: A single string containing a legacy or cash address.
  - `Array` of strings: Array with maximum of 20 legacy or cash addresses.

#### Result

- details:
  - `Object`: containing details about the single address.
  - `Array`: Array of Objects with details about addresses.

#### Examples

    (async () => {
      try {
        let details = await BITBOX.Address.details(['1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA']);
        console.log(details)
      } catch(error) {
       console.error(error)
      }
    })()

    // {
    //   "addrStr": "1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA",
    //   "balance": 0.36781097,
    //   "balanceSat": 36781097,
    //   "totalReceived": 0.36781097,
    //   "totalReceivedSat": 36781097,
    //   "totalSent": 0,
    //   "totalSentSat": 0,
    //   "unconfirmedBalance": 0,
    //   "unconfirmedBalanceSat": 0,
    //   "unconfirmedTxAppearances": 0,
    //   "txAppearances": 7,
    //   "transactions": [
    //     "f737485aaee3c10b13013fa109bb6294b099246134ca9885f4cc332dbc6c9bb4",
    //     "decd5b9c0c959e4e543182093e8f7f8bc7a6ecd96a8a062daaeff3667f8feca7",
    //     "94e69a627a34ae27fca81d15fff4323a7ce1f7c275c7485762ce018221017632",
    //     "e67c70787af7f3506263c9eda007f3d2d24bd750ff95b5c50a120d9118dfd807",
    //     "8e5e00704a147d54028f94d52df7730e821b9c6cd4bd29494e5636f49c199d6a",
    //     "15102827c108566ea5daf725c09079c1a3f42ef99d1eb68ea8c584f7b16ab87a",
    //     "cc27be8846276612dfce5924b7be96556212f0f0e62bd17641732175edb9911e"
    //   ]
    // }

    (async () => {
      try {
        let details = await BITBOX.Address.details(['1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA', "bitcoincash:qp7ekaepv3wf2nq035hevcma4x9sxmp3w56048g6ra"]);
        console.log(details)
      } catch(error) {
       console.error(error)
      }
    })()

    // [ { balance: 0.36781097,
    //   balanceSat: 36781097,
    //   totalReceived: 0.36781097,
    //   totalReceivedSat: 36781097,
    //   totalSent: 0,
    //   totalSentSat: 0,
    //   unconfirmedBalance: 0,
    //   unconfirmedBalanceSat: 0,
    //   unconfirmedTxAppearances: 0,
    //   txAppearances: 7,
    //   transactions:
    //    [ 'f737485aaee3c10b13013fa109bb6294b099246134ca9885f4cc332dbc6c9bb4',
    //      'decd5b9c0c959e4e543182093e8f7f8bc7a6ecd96a8a062daaeff3667f8feca7',
    //      '94e69a627a34ae27fca81d15fff4323a7ce1f7c275c7485762ce018221017632',
    //      'e67c70787af7f3506263c9eda007f3d2d24bd750ff95b5c50a120d9118dfd807',
    //      '8e5e00704a147d54028f94d52df7730e821b9c6cd4bd29494e5636f49c199d6a',
    //      '15102827c108566ea5daf725c09079c1a3f42ef99d1eb68ea8c584f7b16ab87a',
    //      'cc27be8846276612dfce5924b7be96556212f0f0e62bd17641732175edb9911e' ],
    //   legacyAddress: '1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA',
    //   cashAddress: 'bitcoincash:qpcxf2sv9hjw08nvpgffpamfus9nmksm3chv5zqtnz' },
    // { balance: 0,
    //   balanceSat: 0,
    //   totalReceived: 0,
    //   totalReceivedSat: 0,
    //   totalSent: 0,
    //   totalSentSat: 0,
    //   unconfirmedBalance: 0,
    //   unconfirmedBalanceSat: 0,
    //   unconfirmedTxAppearances: 0,
    //   txAppearances: 0,
    //   transactions: [],
    //   legacyAddress: '1CT9huFgxMFveRvzZ7zPPJNoaMm2Fo64VH',
    //   cashAddress: 'bitcoincash:qp7ekaepv3wf2nq035hevcma4x9sxmp3w56048g6ra' } ]

### `utxo`

Return list of uxto for address

#### Arguments

- addresses (required):
  - `String`: A single string containing a legacy or cash address.
  - `Array` of strings: Array with maximum of 20 legacy or cash addresses.

#### Result

- utxo:
  - utxo `Object`: containing `utxo` array of utxos, plus `legacyAddress`,
    `cashAddress` and `scriptPubKey` properties.
  - utxos `Array`: Array of utxo Objects.

#### Examples

    (async () => {
      try {
        let utxo = await BITBOX.Address.utxo(['1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA']);
        console.log(utxo);
      } catch(error) {
       console.error(error)
      }
    })()

    // {
    //   "utxos": [
    //     {
    //       "txid": "27ec8512c1a9ee9e9ae9b98eb60375f1d2bd60e2e76a1eff5a45afdbc517cf9c",
    //       "vout": 0,
    //       "amount": 0.001,
    //       "satoshis": 100000,
    //       "height": 560430,
    //       "confirmations": 5163
    //     },
    //     {
    //       "txid": "6e1ae1bf7db6de799ec1c05ab2816ac65549bd80141567af088e6f291385b07d",
    //       "vout": 0,
    //       "amount": 0.0013,
    //       "satoshis": 130000,
    //       "height": 560039,
    //       "confirmations": 5554
    //     }
    //   ],
    //   "legacyAddress": "1M1FYu4zuVaxRPWLZG5CnP8qQrZaqu6c2L",
    //   "cashAddress": "bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf",
    //   "scriptPubKey": "76a914db6ea94fa26b7272dc5e1487c35f258391e0f38788ac"
    // }

    (async () => {
      try {
        let utxo = await BITBOX.Address.utxo([
          "bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf",
          "bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v"
        ]);
        console.log(utxo);
      } catch(error) {
       console.error(error)
      }
    })()

    // [
    //   {
    //     "utxos": [
    //       {
    //         "txid": "27ec8512c1a9ee9e9ae9b98eb60375f1d2bd60e2e76a1eff5a45afdbc517cf9c",
    //         "vout": 0,
    //         "amount": 0.001,
    //         "satoshis": 100000,
    //         "height": 560430,
    //         "confirmations": 5163
    //       },
    //       {
    //         "txid": "6e1ae1bf7db6de799ec1c05ab2816ac65549bd80141567af088e6f291385b07d",
    //         "vout": 0,
    //         "amount": 0.0013,
    //         "satoshis": 130000,
    //         "height": 560039,
    //         "confirmations": 5554
    //       }
    //     ],
    //     "legacyAddress": "1M1FYu4zuVaxRPWLZG5CnP8qQrZaqu6c2L",
    //     "cashAddress": "bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf",
    //     "scriptPubKey": "76a914db6ea94fa26b7272dc5e1487c35f258391e0f38788ac"
    //   },
    //   {
    //     "utxos": [],
    //     "legacyAddress": "19LXyLnux1tbTdHnMuYAgDZ81ZQDWEi12g",
    //     "cashAddress": "bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v"
    //   }
    // ]

### `unconfirmed`

Return list of unconfirmed transactions for address

#### Arguments

- addresses (required):
  - `String`: A single string containing a legacy or cash address.
  - `Array` of strings: Array with maximum of 20 legacy or cash addresses.

#### Result

- unconfirmed:
  - utxo `Object`: containing `utxo` array of utxos, plus `legacyAddress` and
    `cashAddress` properties.
  - utxos `Array`: Array of utxo Objects.

#### Examples

    (async () => {
      try {
        let unconfirmed = await BITBOX.Address.unconfirmed(['1JCwsMQtiV85fGjps4zXceaCCgxpQ1u84R']);
        console.log(unconfirmed);
      } catch(error) {
       console.error(error)
      }
    })()

    // {
    //   "utxos": [
    //     {
    //       "address": "1JCwsMQtiV85fGjps4zXceaCCgxpQ1u84R",
    //       "txid": "5ddf277cecefab4bb75fb5d6ba21170cec756ef28a045cb4ec45ccffda28cdaf",
    //       "vout": 0,
    //       "scriptPubKey": "76a914bcbc83f8fadb704a6aeccf38079e428da445b11e88ac",
    //       "amount": 0.0001,
    //       "satoshis": 10000,
    //       "confirmations": 0,
    //       "ts": 1547670883
    //     }
    //   ],
    //   "legacyAddress": "1JCwsMQtiV85fGjps4zXceaCCgxpQ1u84R",
    //   "cashAddress": "bitcoincash:qz7teqlcltdhqjn2an8nspu7g2x6g3d3rcq8nk4nzs"
    // }

    (async () => {
      try {
        let unconfirmed = await BITBOX.Address.unconfirmed(['1JCwsMQtiV85fGjps4zXceaCCgxpQ1u84R', "bitcoincash:qqcp8fw06dmjd2gnfanpwytj7q93w408nv7usdqgsk"])
        console.log(unconfirmed);
      } catch(error) {
       console.error(error)
      }
    })()

    // [
    //   {
    //     "utxos": [
    //       {
    //         "address": "1JCwsMQtiV85fGjps4zXceaCCgxpQ1u84R",
    //         "txid": "5ddf277cecefab4bb75fb5d6ba21170cec756ef28a045cb4ec45ccffda28cdaf",
    //         "vout": 0,
    //         "scriptPubKey": "76a914bcbc83f8fadb704a6aeccf38079e428da445b11e88ac",
    //         "amount": 0.0001,
    //         "satoshis": 10000,
    //         "confirmations": 0,
    //         "ts": 1547670883
    //       }
    //     ],
    //     "legacyAddress": "1JCwsMQtiV85fGjps4zXceaCCgxpQ1u84R",
    //     "cashAddress": "bitcoincash:qz7teqlcltdhqjn2an8nspu7g2x6g3d3rcq8nk4nzs"
    //   },
    //   {
    //     "utxos": [
    //       {
    //         "address": "15PCyMYPK6EX4xGenwG55FwdNnuyoHzYAX",
    //         "txid": "f15ea5a836165bff9d711e9a1340e23554e28e03239aa3f4f9951c11ca1b6962",
    //         "vout": 0,
    //         "scriptPubKey": "76a9143013a5cfd37726a9134f66171172f00b1755e79b88ac",
    //         "amount": 0.0001,
    //         "satoshis": 10000,
    //         "confirmations": 0,
    //         "ts": 1547670908
    //       }
    //     ],
    //     "legacyAddress": "15PCyMYPK6EX4xGenwG55FwdNnuyoHzYAX",
    //     "cashAddress": "bitcoincash:qqcp8fw06dmjd2gnfanpwytj7q93w408nv7usdqgsk"
    //   }
    // ]

### `transactions`

Returns decoded transactions for an address

#### Arguments

- addresses (required):
  - `String`: A single string containing a legacy or cash address.
  - `Array` of strings: Array with maximum of 20 legacy or cash addresses.

#### Result

- transaction:
  - `Object`: containing `txs` array of decoded transactions, plus `legacyAddress` and
    `cashAddress` properties.
  - `Array`: Array of txs Objects.

#### Examples

    (async () => {
      try {
        let transaction = await BITBOX.Address.transactions(['bitcoincash:qz7teqlcltdhqjn2an8nspu7g2x6g3d3rcq8nk4nzs']);
        console.log(transaction);
      } catch(error) {
       console.error(error)
      }
    })()

    // {
    //   "pagesTotal": 1,
    //   "txs": [
    //     {
    //       "txid": "5ddf277cecefab4bb75fb5d6ba21170cec756ef28a045cb4ec45ccffda28cdaf",
    //       "version": 2,
    //       "locktime": 0,
    //       "vin": [
    //         {
    //           "txid": "d0ff03c2429810991e8e23cfe2f253891eaae391bcbfd61706d340d9d649abea",
    //           "vout": 0,
    //           "sequence": 4294967295,
    //           "n": 0,
    //           "scriptSig": {
    //             "hex": "483045022100fc121a12774e7f212f42898ea123ecc03099dc610a48627649f58490f183027b0220113964a117dc5aaed7c76a569a287797ccffad192cc346114340e59a706a1cd841210242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd",
    //             "asm": "3045022100fc121a12774e7f212f42898ea123ecc03099dc610a48627649f58490f183027b0220113964a117dc5aaed7c76a569a287797ccffad192cc346114340e59a706a1cd8[ALL|FORKID] 0242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd"
    //           },
    //           "addr": "1GQTe9EdBaF4fCTC2esvPNXewkUZoytADL",
    //           "valueSat": 3466913,
    //           "value": 0.03466913,
    //           "doubleSpentTxID": null
    //         }
    //       ],
    //       "vout": [
    //         {
    //           "value": "0.00010000",
    //           "n": 0,
    //           "scriptPubKey": {
    //             "hex": "76a914bcbc83f8fadb704a6aeccf38079e428da445b11e88ac",
    //             "asm": "OP_DUP OP_HASH160 bcbc83f8fadb704a6aeccf38079e428da445b11e OP_EQUALVERIFY OP_CHECKSIG",
    //             "addresses": [
    //               "1JCwsMQtiV85fGjps4zXceaCCgxpQ1u84R"
    //             ],
    //             "type": "pubkeyhash"
    //           },
    //           "spentTxId": null,
    //           "spentIndex": null,
    //           "spentHeight": null
    //         },
    //         {
    //           "value": "0.03456687",
    //           "n": 1,
    //           "scriptPubKey": {
    //             "hex": "76a914a8f9b1307fa412da6a909f08930e5a502d27a74a88ac",
    //             "asm": "OP_DUP OP_HASH160 a8f9b1307fa412da6a909f08930e5a502d27a74a OP_EQUALVERIFY OP_CHECKSIG",
    //             "addresses": [
    //               "1GQTe9EdBaF4fCTC2esvPNXewkUZoytADL"
    //             ],
    //             "type": "pubkeyhash"
    //           },
    //           "spentTxId": null,
    //           "spentIndex": null,
    //           "spentHeight": null
    //         }
    //       ],
    //       "blockheight": -1,
    //       "confirmations": 0,
    //       "time": 1547674527,
    //       "valueOut": 0.03466687,
    //       "size": 226,
    //       "valueIn": 0.03466913,
    //       "fees": 0.00000226
    //     }
    //   ],
    //   "legacyAddress": "1JCwsMQtiV85fGjps4zXceaCCgxpQ1u84R",
    //   "cashAddress": "bitcoincash:qz7teqlcltdhqjn2an8nspu7g2x6g3d3rcq8nk4nzs",
    //   "currentPage": 0
    // }

    (async () => {
      try {
        let transaction = await BITBOX.Address.transactions([
          "bitcoincash:qz7teqlcltdhqjn2an8nspu7g2x6g3d3rcq8nk4nzs",
          "bitcoincash:qqcp8fw06dmjd2gnfanpwytj7q93w408nv7usdqgsk"
        ]);
        console.log(transaction);
      } catch(error) {
       console.error(error)
      }
    })()

    // [
    //   {
    //     "pagesTotal": 1,
    //     "txs": [
    //       {
    //         "txid": "5ddf277cecefab4bb75fb5d6ba21170cec756ef28a045cb4ec45ccffda28cdaf",
    //         "version": 2,
    //         "locktime": 0,
    //         "vin": [
    //           {
    //             "txid": "d0ff03c2429810991e8e23cfe2f253891eaae391bcbfd61706d340d9d649abea",
    //             "vout": 0,
    //             "sequence": 4294967295,
    //             "n": 0,
    //             "scriptSig": {
    //               "hex": "483045022100fc121a12774e7f212f42898ea123ecc03099dc610a48627649f58490f183027b0220113964a117dc5aaed7c76a569a287797ccffad192cc346114340e59a706a1cd841210242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd",
    //               "asm": "3045022100fc121a12774e7f212f42898ea123ecc03099dc610a48627649f58490f183027b0220113964a117dc5aaed7c76a569a287797ccffad192cc346114340e59a706a1cd8[ALL|FORKID] 0242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd"
    //             },
    //             "addr": "1GQTe9EdBaF4fCTC2esvPNXewkUZoytADL",
    //             "valueSat": 3466913,
    //             "value": 0.03466913,
    //             "doubleSpentTxID": null
    //           }
    //         ],
    //         "vout": [
    //           {
    //             "value": "0.00010000",
    //             "n": 0,
    //             "scriptPubKey": {
    //               "hex": "76a914bcbc83f8fadb704a6aeccf38079e428da445b11e88ac",
    //               "asm": "OP_DUP OP_HASH160 bcbc83f8fadb704a6aeccf38079e428da445b11e OP_EQUALVERIFY OP_CHECKSIG",
    //               "addresses": [
    //                 "1JCwsMQtiV85fGjps4zXceaCCgxpQ1u84R"
    //               ],
    //               "type": "pubkeyhash"
    //             },
    //             "spentTxId": null,
    //             "spentIndex": null,
    //             "spentHeight": null
    //           },
    //           {
    //             "value": "0.03456687",
    //             "n": 1,
    //             "scriptPubKey": {
    //               "hex": "76a914a8f9b1307fa412da6a909f08930e5a502d27a74a88ac",
    //               "asm": "OP_DUP OP_HASH160 a8f9b1307fa412da6a909f08930e5a502d27a74a OP_EQUALVERIFY OP_CHECKSIG",
    //               "addresses": [
    //                 "1GQTe9EdBaF4fCTC2esvPNXewkUZoytADL"
    //               ],
    //               "type": "pubkeyhash"
    //             },
    //             "spentTxId": null,
    //             "spentIndex": null,
    //             "spentHeight": null
    //           }
    //         ],
    //         "blockheight": -1,
    //         "confirmations": 0,
    //         "time": 1547674527,
    //         "valueOut": 0.03466687,
    //         "size": 226,
    //         "valueIn": 0.03466913,
    //         "fees": 0.00000226
    //       }
    //     ],
    //     "legacyAddress": "1JCwsMQtiV85fGjps4zXceaCCgxpQ1u84R",
    //     "cashAddress": "bitcoincash:qz7teqlcltdhqjn2an8nspu7g2x6g3d3rcq8nk4nzs",
    //     "currentPage": 0
    //   },
    //   {
    //     "pagesTotal": 1,
    //     "txs": [
    //       {
    //         "txid": "f15ea5a836165bff9d711e9a1340e23554e28e03239aa3f4f9951c11ca1b6962",
    //         "version": 2,
    //         "locktime": 0,
    //         "vin": [
    //           {
    //             "txid": "5ddf277cecefab4bb75fb5d6ba21170cec756ef28a045cb4ec45ccffda28cdaf",
    //             "vout": 1,
    //             "sequence": 4294967295,
    //             "n": 0,
    //             "scriptSig": {
    //               "hex": "47304402206124fca6aecc35e48b5d1293bd97cadb39f830308c75331b3e5fd2e6806efe9b0220014cf3ecf0be1cb1bee7e362257b33e0905451d44f0902b13ada2765d53332d741210242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd",
    //               "asm": "304402206124fca6aecc35e48b5d1293bd97cadb39f830308c75331b3e5fd2e6806efe9b0220014cf3ecf0be1cb1bee7e362257b33e0905451d44f0902b13ada2765d53332d7[ALL|FORKID] 0242faa7cc02f9e6c3a0aec97a946b9d3793fa6ab76362e02dd239bc56393671cd"
    //             },
    //             "addr": "1GQTe9EdBaF4fCTC2esvPNXewkUZoytADL",
    //             "valueSat": 3456687,
    //             "value": 0.03456687,
    //             "doubleSpentTxID": null
    //           }
    //         ],
    //         "vout": [
    //           {
    //             "value": "0.00010000",
    //             "n": 0,
    //             "scriptPubKey": {
    //               "hex": "76a9143013a5cfd37726a9134f66171172f00b1755e79b88ac",
    //               "asm": "OP_DUP OP_HASH160 3013a5cfd37726a9134f66171172f00b1755e79b OP_EQUALVERIFY OP_CHECKSIG",
    //               "addresses": [
    //                 "15PCyMYPK6EX4xGenwG55FwdNnuyoHzYAX"
    //               ],
    //               "type": "pubkeyhash"
    //             },
    //             "spentTxId": null,
    //             "spentIndex": null,
    //             "spentHeight": null
    //           },
    //           {
    //             "value": "0.03446461",
    //             "n": 1,
    //             "scriptPubKey": {
    //               "hex": "76a914a8f9b1307fa412da6a909f08930e5a502d27a74a88ac",
    //               "asm": "OP_DUP OP_HASH160 a8f9b1307fa412da6a909f08930e5a502d27a74a OP_EQUALVERIFY OP_CHECKSIG",
    //               "addresses": [
    //                 "1GQTe9EdBaF4fCTC2esvPNXewkUZoytADL"
    //               ],
    //               "type": "pubkeyhash"
    //             },
    //             "spentTxId": null,
    //             "spentIndex": null,
    //             "spentHeight": null
    //           }
    //         ],
    //         "blockheight": -1,
    //         "confirmations": 0,
    //         "time": 1547674527,
    //         "valueOut": 0.03456461,
    //         "size": 225,
    //         "valueIn": 0.03456687,
    //         "fees": 0.00000226
    //       }
    //     ],
    //     "legacyAddress": "15PCyMYPK6EX4xGenwG55FwdNnuyoHzYAX",
    //     "cashAddress": "bitcoincash:qqcp8fw06dmjd2gnfanpwytj7q93w408nv7usdqgsk",
    //     "currentPage": 0
    //   }
    // ]
