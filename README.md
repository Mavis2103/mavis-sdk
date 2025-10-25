<p align="center">
  <img width="130px" src="docs/public/mavis-sdk-al-red.svg" align="center"/>
  <h1 align="center">Mavis <span style="color: #AD1F1E;">SDK</span></h1>
  <p align="center">A highly scalable, production-ready transaction builder and off-chain framework for dApps and devs on Cardano.</p>
</p>

<p align="center">
  <a href="https://github.com/Mavis2103/mavis-sdk/actions/workflows/main.yml">
    <img src="https://github.com/Mavis2103/mavis-sdk/actions/workflows/main.yml/badge.svg" alt="Build Status"/>
  </a>
  <img src="https://img.shields.io/npm/dy/%40mavis-sdk%2Flucid" alt="NPM Downloads"/>
  <a href="https://discord.gg/s89P9gpEff">
    <img alt="Discord" src="https://img.shields.io/discord/947985069111377951?logo=discord">
  </a>
  <img alt="NPM Version" src="https://img.shields.io/npm/v/%40mavis-sdk%2Flucid?color=%2350C62A">
</p>

---

## 📦 [Install](https://Mavis2103.github.io/mavis-sdk/install)

```bash
pnpm i @mavis-sdk/lucid
```

<div align="center">
  <strong>💡 Installing the <code>lucid</code> package automatically includes all other packages in the library.</strong>
</div>

---

## 🚀 Quick Start

```typescript
import { Lucid, Koios, generateSeedPhrase } from "@mavis-sdk/lucid";

// Initialize Lucid with a provider
const lucid = await Lucid(
  new Koios("https://preprod.koios.rest/api/v1"),
  "Preprod",
);

const seedPhrase = generateSeedPhrase(); // BIP-39
lucid.selectWallet.fromSeed(seedPhrase); // Select a wallet for signing

// Build, sign and submit transaction
const tx = await lucid
  .newTx()
  .pay.ToAddress("addr_testa...", { lovelace: 5000000n }) // Pay 5 ADA to addr_testa...
  .pay.ToAddress("addr_testb...", { lovelace: 5000000n }) // Pay 5 ADA to addr_testb...
  .complete(); // Balance the transaction and initiate UTxO selection

const signedTx = await tx.sign.withWallet().complete();
const txHash = await signedTx.submit();

console.log("Transaction Submitted:", txHash);
```

---

## ✨ Features

The `@mavis-sdk/lucid` package provides powerful transaction building capabilities for Cardano:

### Transaction Building Functions

- **Payments**: `pay.ToAddress()`, `pay.ToAddressWithData()`, `pay.ToContract()`
- **Minting**: `mintAssets()`
- **Staking**: `registerStake()`, `deRegisterStake()`, `withdraw()`, `delegateTo()`, `delegate.ToPool()`, `delegate.VoteToDRep()`
- **Governance**: `register.DRep()`, `deregister.DRep()`, `addProposal()`, `updateDRep()`, `authCommitteeHot()`, `resignCommitteeHot()`
- **Scripts & Data**: `attach.Script()`, `attach.SpendingValidator()`, `attach.MintingPolicy()`, `attachMetadata()`
- **Inputs**: `readFrom()`, `collectFrom()`
- **Timing**: `validFrom()`, `validTo()`
- **Composition**: `compose()`, `setMinFee()`
- **Completion**: `complete()`, `completeProgram()`, `completeSafe()`, `chain()`, `chainSafe()`
  - Options:
    - `coinSelection`: enable coin selection (default true)
    - `changeAddress`: change output address
    - `localUPLCEval`: enable local UPLC evaluation (default true)
    - `setCollateral`: collateral amount (default 5_000_000n)
    - `canonical`: use canonical ordering (default false)
    - `includeLeftoverLovelaceAsFee`: include leftover ADA as fee (default false)
    - `presetWalletInputs`: preset wallet UTxOs
    - `logTransactionCBOR`: log transaction CBOR (default false)

---

## 📚 Documentation

For comprehensive documentation including API references, examples, and guides, visit our [official documentation site](https://Mavis2103.github.io/mavis-sdk/).

- 🔍 [Core Concepts](https://Mavis2103.github.io/mavis-sdk/documentation/core-concepts/instantiate-evolution)
- 🧠 [Deep Dives](https://Mavis2103.github.io/mavis-sdk/documentation/deep-dives/pay-methods)
- ⚙️ [Under the Hood](https://Mavis2103.github.io/mavis-sdk/documentation/under-the-hood)

### Getting Started

```bash
git clone https://github.com/Mavis2103/mavis-sdk.git
```

```bash
cd mavis-sdk
pnpm install
```

```bash
pnpm build
```

<div style="margin: 20px 0;"></div>

<div align="center">
  <details>
    <summary><strong>📦 View</strong> Package Overview</summary>
    <div style="text-align: left; margin-top: 15px;">
      <table>
        <thead>
          <tr>
            <th>Package</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>@mavis-sdk/lucid</code></td>
            <td>Core package for Mavis SDK</td>
          </tr>
          <tr>
            <td><code>@mavis-sdk/bip39</code></td>
            <td>BIP-39 mnemonic code implementation</td>
          </tr>
          <tr>
            <td><code>@mavis-sdk/core-types</code></td>
            <td>Shared type definitions</td>
          </tr>
          <tr>
            <td><code>@mavis-sdk/core-utils</code></td>
            <td>Common utility functions</td>
          </tr>
          <tr>
            <td><code>@mavis-sdk/crc8</code></td>
            <td>CRC8 calculation utilities</td>
          </tr>
          <tr>
            <td><code>@mavis-sdk/plutus</code></td>
            <td>Plutus integration tools</td>
          </tr>
          <tr>
            <td><code>@mavis-sdk/provider</code></td>
            <td>Data provider interfaces</td>
          </tr>
          <tr>
            <td><code>@mavis-sdk/sign_data</code></td>
            <td>Data signing utilities</td>
          </tr>
          <tr>
            <td><code>@mavis-sdk/utils</code></td>
            <td>General-purpose utility functions</td>
          </tr>
          <tr>
            <td><code>@mavis-sdk/wallet</code></td>
            <td>Wallet integration package</td>
          </tr>
          <tr>
            <td><code>@mavis-sdk/typescript-config</code></td>
            <td>Shared TypeScript configurations</td>
          </tr>
          <tr>
            <td><code>@mavis-sdk/eslint-config</code></td>
            <td>Shared ESLint configurations</td>
          </tr>
        </tbody>
      </table>
    </div>
  </details>
</div>

<div style="margin: 20px 0;"></div>

### 🧪 Testing

```bash
# Run tests across all packages
pnpm test

# Run tests for a specific package
pnpm --filter @mavis-sdk/lucid test
```

<div style="margin: 20px 0;"></div>

<div align="center">
  <details>
    <summary><strong>🧪 Testing Details</strong></summary>
    <div style="text-align: left; margin-top: 15px;">
      <p>Mavis SDK includes both unit tests and on-chain integration tests.</p>
      <p>For detailed testing instructions, including environment setup and API keys, please refer to our <a href="./CONTRIBUTING.md#local-testing">CONTRIBUTING guide</a>.</p>
    </div>
  </details>
</div>

<div style="margin: 20px 0;"></div>

### 📖 Local Documentation

```bash
pnpm dev
```

> Visit http://localhost:3000/mavis-sdk.

---

## 📜 License

Mavis SDK is licensed under the [MIT License](./LICENSE).

---

<div style="margin: 20px 0;"></div>

<p align="center">Maintained with ❤️ by <a href="https://your-website.com/">Mavis</a></p>
