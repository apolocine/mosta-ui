# @mostajs/ui

Shared UI component library for the @mostajs ecosystem. Built on [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) primitives with Tailwind CSS.

## Installation

```bash
npm install @mostajs/ui radix-ui lucide-react
```

Make sure your project has Tailwind CSS configured.

## Components

| Component | Import | Description |
|-----------|--------|-------------|
| Button | `@mostajs/ui/button` | Button with variants (default, outline, ghost, destructive, link) and sizes |
| Card | `@mostajs/ui/card` | Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter |
| Dialog | `@mostajs/ui/dialog` | Modal dialog with overlay |
| AlertDialog | `@mostajs/ui/alert-dialog` | Confirmation dialog with action/cancel buttons |
| Input | `@mostajs/ui/input` | Styled text input |
| Label | `@mostajs/ui/label` | Form label |
| Select | `@mostajs/ui/select` | Dropdown select with groups and items |
| Checkbox | `@mostajs/ui/checkbox` | Checkbox with indeterminate state |
| Table | `@mostajs/ui/table` | Table, TableHeader, TableBody, TableRow, TableHead, TableCell |
| Tabs | `@mostajs/ui/tabs` | Tabbed interface (Tabs, TabsList, TabsTrigger, TabsContent) |
| Badge | `@mostajs/ui/badge` | Status badges with variants |
| Avatar | `@mostajs/ui/avatar` | Avatar with image + fallback |
| Switch | `@mostajs/ui/switch` | Toggle switch |
| Tooltip | `@mostajs/ui/tooltip` | Hover tooltip |
| Popover | `@mostajs/ui/popover` | Click-to-open popover |
| Separator | `@mostajs/ui/separator` | Horizontal/vertical separator |
| DropdownMenu | `@mostajs/ui/dropdown-menu` | Context/dropdown menu |
| Sonner | `@mostajs/ui/sonner` | Toast notifications (wraps sonner) |

## Usage

### Import individual components (recommended)

```tsx
import { Button } from '@mostajs/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@mostajs/ui/card'
import { Input } from '@mostajs/ui/input'
import { Label } from '@mostajs/ui/label'
```

### Import from barrel

```tsx
import { Button, Card, CardContent, Input, Label } from '@mostajs/ui'
```

### Button

```tsx
import { Button } from '@mostajs/ui/button'

<Button variant="default">Save</Button>
<Button variant="outline">Cancel</Button>
<Button variant="destructive" size="sm">Delete</Button>
<Button variant="ghost" size="icon"><TrashIcon /></Button>
```

**Variants:** `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
**Sizes:** `default`, `sm`, `lg`, `icon`

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@mostajs/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Client Details</CardTitle>
    <CardDescription>View and edit client information</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content here</p>
  </CardContent>
  <CardFooter>
    <Button>Save</Button>
  </CardFooter>
</Card>
```

### Dialog

```tsx
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from '@mostajs/ui/dialog'

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Client</DialogTitle>
      <DialogDescription>Make changes to the client profile.</DialogDescription>
    </DialogHeader>
    <div>Form fields here...</div>
    <DialogFooter>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Table

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@mostajs/ui/table'

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Quota</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {clients.map((client) => (
      <TableRow key={client.id}>
        <TableCell>{client.name}</TableCell>
        <TableCell><Badge>{client.status}</Badge></TableCell>
        <TableCell>{client.quota}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

### Select

```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@mostajs/ui/select'

<Select value={ticketType} onValueChange={setTicketType}>
  <SelectTrigger>
    <SelectValue placeholder="Select type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="normal">Normal</SelectItem>
    <SelectItem value="cadeau">Gift</SelectItem>
    <SelectItem value="vip">VIP</SelectItem>
  </SelectContent>
</Select>
```

### Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@mostajs/ui/tabs'

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="history">History</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="history">History content</TabsContent>
</Tabs>
```

### Badge

```tsx
import { Badge } from '@mostajs/ui/badge'

<Badge>Active</Badge>
<Badge variant="secondary">Pending</Badge>
<Badge variant="destructive">Expired</Badge>
<Badge variant="outline">Draft</Badge>
```

### Toast (Sonner)

```tsx
// In your root layout:
import { Toaster } from '@mostajs/ui/sonner'

<Toaster />

// Anywhere in your app:
import { toast } from 'sonner'

toast.success('Client created!')
toast.error('Failed to save')
```

## Utility: `cn()`

Merge Tailwind classes with `clsx` + `tailwind-merge`:

```tsx
import { cn } from '@mostajs/ui/lib/utils'

<div className={cn('text-sm', isActive && 'text-blue-600', className)}>
```

## Migrating from local `@/components/ui`

Replace imports:

```diff
- import { Button } from '@/components/ui/button'
+ import { Button } from '@mostajs/ui/button'

- import { Card, CardContent } from '@/components/ui/card'
+ import { Card, CardContent } from '@mostajs/ui/card'

- import { cn } from '@/lib/utils'
+ import { cn } from '@mostajs/ui/lib/utils'
```

## License

MIT
