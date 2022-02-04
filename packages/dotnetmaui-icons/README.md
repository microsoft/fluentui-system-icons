# Microsoft.Maui.Icons.FluentUI

![image](https://user-images.githubusercontent.com/271950/152597297-9cdec4a4-33a3-4d6a-8c9e-18be20a0c9e9.png)


## Usage in a .NET MAUI App

You can register your fonts in the `ConfigureFonts` method like below:

```csharp
namespace MauiApp18;

public static class MauiProgram
{
	public static MauiApp CreateMauiApp()
	{
		var builder = MauiApp.CreateBuilder();
		builder
			.UseMauiApp<App>()
			.ConfigureFonts(fonts =>
			{
				fonts.AddFont(Microsoft.Maui.Icons.FluentUI.Regular.Filename, "FluentUIRegular");
				fonts.AddFont(Microsoft.Maui.Icons.FluentUI.Filled.Filename, "FluentUIFilled");
			});

		return builder.Build();
	}
}
```

Using the font glyph:

```xml
<ContentPage
	xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
	xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
	xmlns:fluent="http://schemas.microsoft.com/dotnet/2021/maui/icons/fluentui"
	x:Class="MyApp.MainPage">
	<Grid>
		<Image WidthRequest="40" HeightRequest="40">
			<Image.Source>
				<FontImageSource
					FontFamily="FluentUIRegular"
					Glyph="{x:Static fluentui:Regular.checkmark_20_regular}"
					Color="Green" />
			</Image.Source>
		</Image>
	</Grid>
</ContentPage>
```

## Excluding Fonts
By default both the `Regular` and `Filled` fonts are included, however since they are larger files, you may only want one.  If you want to exclude either one, set the appropriate MSBuild property to `True` in your .csproj file:

```xml
<PropertyGroup>
	<!-- Excludes Filled -->
	<ExcludeIconsFluentUIFilled>True</ExcludeIconsFluentUIFilled>	
	
	<!-- Excludes Regular -->
	<ExcludeIconsFluentUIRegular>True</ExcludeIconsFluentUIRegular>
</PropertyGroup>
```
