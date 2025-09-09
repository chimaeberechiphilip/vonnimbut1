
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Calculator, FileText, Truck, Shield, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    
    // Product Requirements
    products: [] as string[],
    quantities: {} as { [key: string]: string },
    specifications: '',
    
    // Shipping & Logistics
    deliveryLocation: '',
    preferredPort: '',
    urgency: '',
    paymentTerms: '',
    
    // Additional Information
    additionalRequirements: '',
    certificationNeeds: [] as string[],
    
    // Agreement
    termsAccepted: false,
    newsletterSubscribe: false
  });

  const productOptions = [
    { id: 'zinc-ore', name: 'Zinc Ore', unit: 'metric tons' },
    { id: 'lead-ore', name: 'Lead Ore', unit: 'metric tons' },
    { id: 'lithium', name: 'Lithium', unit: 'metric tons' },
    { id: 'iron-ore', name: 'Iron Ore', unit: 'metric tons' },
    { id: 'tin', name: 'Tin', unit: 'metric tons' },
    { id: 'monazite', name: 'Monazite', unit: 'metric tons' },
    { id: 'zircon', name: 'Zircon', unit: 'metric tons' }
  ];

  const certificationOptions = [
    'Certificate of Analysis',
    'ISO 9001:2015',
    'Origin Certificate',
    'Quality Assurance Documents',
    'Export License',
    'Third-Party Testing Results',
    'Environmental Compliance'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Quote Request Submitted!",
      description: "We'll prepare your customized quote and respond within 24 hours.",
    });
    
    // Reset form
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      country: '',
      products: [],
      quantities: {},
      specifications: '',
      deliveryLocation: '',
      preferredPort: '',
      urgency: '',
      paymentTerms: '',
      additionalRequirements: '',
      certificationNeeds: [],
      termsAccepted: false,
      newsletterSubscribe: false
    });
  };

  const handleProductSelection = (productId: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        products: [...prev.products, productId]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        products: prev.products.filter(id => id !== productId),
        quantities: { ...prev.quantities, [productId]: '' }
      }));
    }
  };

  const handleQuantityChange = (productId: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      quantities: { ...prev.quantities, [productId]: value }
    }));
  };

  const handleCertificationChange = (cert: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        certificationNeeds: [...prev.certificationNeeds, cert]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        certificationNeeds: prev.certificationNeeds.filter(c => c !== cert)
      }));
    }
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-night-blue to-steel-blue text-white">
        <div className="container text-center">
          <Badge className="mb-4 bg-rust-orange/20 text-rust-orange border-rust-orange/30">
            Request Custom Quote
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Personalized Quote
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Tell us about your mineral requirements and we'll prepare a detailed, competitive quote tailored to your needs.
          </p>
        </div>
      </section>

      {/* Quote Process */}
      <section className="py-12 bg-iron-silver">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-rust-orange/10">
                  <FileText className="h-8 w-8 text-rust-orange" />
                </div>
              </div>
              <h3 className="font-semibold text-night-blue">1. Submit Details</h3>
              <p className="text-sm text-gray-600">Provide your requirements</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-bright-green/10">
                  <Calculator className="h-8 w-8 text-bright-green" />
                </div>
              </div>
              <h3 className="font-semibold text-night-blue">2. Price Calculation</h3>
              <p className="text-sm text-gray-600">We prepare your quote</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-steel-blue/10">
                  <Truck className="h-8 w-8 text-steel-blue" />
                </div>
              </div>
              <h3 className="font-semibold text-night-blue">3. Logistics Planning</h3>
              <p className="text-sm text-gray-600">Shipping & delivery options</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gold/10">
                  <CheckCircle className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h3 className="font-semibold text-night-blue">4. Quote Delivery</h3>
              <p className="text-sm text-gray-600">Receive detailed proposal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-night-blue">Company Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company Name *</label>
                    <Input
                      value={formData.companyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                      placeholder="Your company name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Contact Person *</label>
                    <Input
                      value={formData.contactPerson}
                      onChange={(e) => setFormData(prev => ({ ...prev, contactPerson: e.target.value }))}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Country *</label>
                    <Input
                      value={formData.country}
                      onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                      placeholder="Your country"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-night-blue">Product Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-4 block">Select Products *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {productOptions.map((product) => (
                      <div key={product.id} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={product.id}
                            checked={formData.products.includes(product.id)}
                            onCheckedChange={(checked) => handleProductSelection(product.id, checked as boolean)}
                          />
                          <label htmlFor={product.id} className="text-sm font-medium">
                            {product.name}
                          </label>
                        </div>
                        {formData.products.includes(product.id) && (
                          <Input
                            placeholder={`Quantity in ${product.unit}`}
                            value={formData.quantities[product.id] || ''}
                            onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Special Specifications</label>
                  <Textarea
                    value={formData.specifications}
                    onChange={(e) => setFormData(prev => ({ ...prev, specifications: e.target.value }))}
                    placeholder="Any specific purity levels, particle sizes, or other technical requirements..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Shipping & Logistics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-night-blue">Shipping & Logistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Delivery Location *</label>
                    <Input
                      value={formData.deliveryLocation}
                      onChange={(e) => setFormData(prev => ({ ...prev, deliveryLocation: e.target.value }))}
                      placeholder="City, Country or Port"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Preferred Port</label>
                    <Select value={formData.preferredPort} onValueChange={(value) => setFormData(prev => ({ ...prev, preferredPort: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred port" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lagos">Lagos Port, Nigeria</SelectItem>
                        <SelectItem value="port-harcourt">Port Harcourt, Nigeria</SelectItem>
                        <SelectItem value="cif">CIF (Cost, Insurance, Freight)</SelectItem>
                        <SelectItem value="fob">FOB (Free on Board)</SelectItem>
                        <SelectItem value="other">Other (specify in comments)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Urgency</label>
                    <Select value={formData.urgency} onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (Within 2 weeks)</SelectItem>
                        <SelectItem value="standard">Standard (2-4 weeks)</SelectItem>
                        <SelectItem value="flexible">Flexible (1-2 months)</SelectItem>
                        <SelectItem value="planning">Planning stage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Payment Terms</label>
                    <Select value={formData.paymentTerms} onValueChange={(value) => setFormData(prev => ({ ...prev, paymentTerms: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Preferred payment terms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lc">Letter of Credit</SelectItem>
                        <SelectItem value="tt">Wire Transfer (T/T)</SelectItem>
                        <SelectItem value="dp">Documents against Payment</SelectItem>
                        <SelectItem value="da">Documents against Acceptance</SelectItem>
                        <SelectItem value="other">Other (discuss)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-night-blue">Required Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {certificationOptions.map((cert) => (
                    <div key={cert} className="flex items-center space-x-2">
                      <Checkbox
                        id={cert}
                        checked={formData.certificationNeeds.includes(cert)}
                        onCheckedChange={(checked) => handleCertificationChange(cert, checked as boolean)}
                      />
                      <label htmlFor={cert} className="text-sm">
                        {cert}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-night-blue">Additional Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <label className="text-sm font-medium mb-2 block">Additional Requirements or Comments</label>
                  <Textarea
                    value={formData.additionalRequirements}
                    onChange={(e) => setFormData(prev => ({ ...prev, additionalRequirements: e.target.value }))}
                    placeholder="Any specific requirements, volume commitments, long-term contracts, or other details..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Terms and Submit */}
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, termsAccepted: checked as boolean }))}
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the <a href="/terms" className="text-rust-orange hover:underline">Terms and Conditions</a> and 
                    <a href="/privacy" className="text-rust-orange hover:underline ml-1">Privacy Policy</a> *
                  </label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletterSubscribe}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletterSubscribe: checked as boolean }))}
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-700">
                    Subscribe to our newsletter for industry updates and company news
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button type="submit" size="lg" className="flex-1 bg-rust-orange hover:bg-rust-orange/90">
                    <Calculator className="mr-2 h-5 w-5" />
                    Submit Quote Request
                  </Button>
                  <Button type="button" size="lg" variant="outline" className="flex-1">
                    <Clock className="mr-2 h-5 w-5" />
                    Save as Draft
                  </Button>
                </div>

                <div className="bg-iron-silver p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-4 w-4 text-bright-green" />
                    <span className="text-sm font-medium">Secure & Confidential</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Your information is protected with industry-standard encryption. We'll respond within 24 hours with a detailed quote.
                  </p>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Quote;
