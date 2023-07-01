package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Drop48: ImageVector
  get() {
    if (_drop48 != null) {
      return _drop48!!
    }
    _drop48 = fluentIcon(name = "Regular.Drop48", 48f) {
      materialPath {
          moveTo(24.0F, 4.0F)
          curveToRelative(0.331F, 0.0F, 0.65F, 0.132F, 0.884F, 0.366F)
          lineTo(25.119F, 4.6F)
          curveToRelative(1.135F, 1.125F, 4.249F, 4.21F, 7.173F, 8.227F)
          curveTo(35.42F, 17.124F, 38.5F, 22.71F, 38.5F, 28.25F)
          curveToRelative(0.0F, 5.376F, -1.599F, 9.357F, -4.312F, 11.99F)
          curveTo(31.485F, 42.865F, 27.829F, 44.0F, 24.0F, 44.0F)
          curveToRelative(-3.83F, 0.0F, -7.485F, -1.136F, -10.188F, -3.76F)
          curveTo(11.1F, 37.608F, 9.5F, 33.627F, 9.5F, 28.25F)
          curveToRelative(0.0F, -5.535F, 3.013F, -11.057F, 6.113F, -15.328F)
          curveToRelative(2.89F, -3.981F, 5.996F, -7.061F, 7.235F, -8.29F)
          lineToRelative(0.268F, -0.266F)
          curveTo(23.351F, 4.132F, 23.67F, 4.0F, 24.0F, 4.0F)
          close()
          moveToRelative(-6.363F, 10.39F)
          curveTo(14.612F, 18.558F, 12.0F, 23.536F, 12.0F, 28.25F)
          curveToRelative(0.0F, 4.874F, 1.437F, 8.143F, 3.553F, 10.197F)
          curveTo(17.68F, 40.51F, 20.65F, 41.5F, 24.0F, 41.5F)
          curveToRelative(3.35F, 0.0F, 6.32F, -0.99F, 8.447F, -3.053F)
          curveTo(34.563F, 36.393F, 36.0F, 33.124F, 36.0F, 28.25F)
          curveToRelative(0.0F, -4.71F, -2.67F, -9.75F, -5.73F, -13.952F)
          curveToRelative(-2.368F, -3.255F, -4.87F, -5.875F, -6.27F, -7.284F)
          curveToRelative(-1.448F, 1.455F, -3.984F, 4.098F, -6.363F, 7.377F)
          close()        
      }
    }
    return _drop48!!
  }

private var _drop48: ImageVector? = null
