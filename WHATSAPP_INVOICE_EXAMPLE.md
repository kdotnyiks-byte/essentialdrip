# Invoice System - WhatsApp & Downloadable Format

## WhatsApp Invoice Format (No Emojis)

When a customer clicks "Checkout via WhatsApp", they will send a professional invoice like this:

```
*ESSENTIAL DRIP APPAREL*
SALES INVOICE
================================
Invoice No: INV-12345678
Date: October 13, 2025, 04:43 PM
Total Items: 3
================================

*ITEM DETAILS*
--------------------------------

1. Nike Air Max 270
   Size: 10
   Quantity: 2
   Unit Price: $149.99
   Line Total: $299.98

2. Adidas Ultraboost
   Size: 9
   Quantity: 1
   Unit Price: $179.99
   Line Total: $179.99

3. Essential Drip Tee
   Size: L
   Quantity: 1
   Unit Price: $29.99
   Line Total: $29.99

================================
*PAYMENT BREAKDOWN*
--------------------------------
Subtotal: $509.96
Shipping: FREE
(Free shipping on orders over $50)
--------------------------------
*GRAND TOTAL: $509.96*
================================

*CUSTOMER ACTION REQUIRED:*
Please provide the following:

1. Full Delivery Address
2. Contact Phone Number
3. Preferred Payment Method

--------------------------------
Thank you for choosing Essential Drip Apparel.
We will process your order upon confirmation.
```

## Downloadable Invoice Format

When clicking "Download Invoice", customers get a text file with this format:

```
╔════════════════════════════════════════════════════════╗
║           ESSENTIAL DRIP APPAREL                       ║
║              SALES INVOICE                             ║
╚════════════════════════════════════════════════════════╝

Invoice Number: INV-12345678
Date: October 13, 2025, 04:43 PM
Total Items: 3

────────────────────────────────────────────────────────

ITEM DETAILS:

1. Nike Air Max 270
   Size: 10
   Quantity: 2
   Unit Price: $149.99
   Line Total: $299.98

2. Adidas Ultraboost
   Size: 9
   Quantity: 1
   Unit Price: $179.99
   Line Total: $179.99

3. Essential Drip Tee
   Size: L
   Quantity: 1
   Unit Price: $29.99
   Line Total: $29.99

────────────────────────────────────────────────────────

PAYMENT BREAKDOWN:

Subtotal:           $509.96
Shipping:           FREE
(Free shipping on orders over $50)

────────────────────────────────────────────────────────
GRAND TOTAL:        $509.96
════════════════════════════════════════════════════════

CUSTOMER ACTION REQUIRED:
Please provide the following:

1. Full Delivery Address
2. Contact Phone Number
3. Preferred Payment Method

────────────────────────────────────────────────────────
Thank you for choosing Essential Drip Apparel.
We will process your order upon confirmation.
```

## Features

### Invoice Header
- Brand name in bold
- Unique invoice number (INV-XXXXXXXX)
- Date and time stamp
- Total number of items
- Professional layout

### Detailed Item List
For each product:
- Item number and product name
- Size selected
- Quantity ordered
- Unit price
- Line item total

### Payment Summary
- Subtotal of all items
- Shipping cost (FREE if over $50)
- Grand total in bold
- Clear visual separators

### Customer Action Items
Prompts customer to provide:
1. Full delivery address
2. Contact phone number
3. Preferred payment method

### Professional Formatting
- **WhatsApp Version**: Bold text for emphasis, clean separators, URL-encoded
- **Download Version**: Box drawing characters, aligned columns, print-ready
- No emojis for professional appearance
- Easy to read and process
- Can be saved/printed as documentation

## Benefits

1. **Professional Appearance** - Looks like a real invoice
2. **Complete Information** - All order details in one message
3. **Easy to Process** - You can quickly see what customer wants
4. **No Confusion** - Clear breakdown of costs
5. **Action Items** - Customer knows what info to provide next
6. **Brand Consistency** - Matches your Essential Drip Apparel brand

## Technical Details

- Function: `generateWhatsAppInvoice()`
- Location: `js/cart.js`
- Encoding: URL-encoded for WhatsApp API
- Format: WhatsApp markdown formatting
- Dynamic: Auto-calculates totals and shipping
