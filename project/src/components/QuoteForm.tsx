const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setError('');
  setSubmitting(true);

  try {
    let photoUrls: string[] = [];

    if (files.length > 0) {
      photoUrls = await uploadFiles();
    }

    const { error: insertError } = await supabase
      .from('quote_requests')
      .insert({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address_or_area: formData.address,
        service: formData.serviceType,
        message: formData.message,
        photo_urls: photoUrls,
        source: 'website',
        status: 'new',
      });

    if (insertError) throw insertError;

    setSubmitted(true);
  } catch (err) {
    setError('Something went wrong. Please try again or call us directly.');
    console.error(err);
  } finally {
    setSubmitting(false);
  }
};
