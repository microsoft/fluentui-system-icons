package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Drop48: ImageVector
  get() {
    if (_drop48 != null) {
      return _drop48!!
    }
    _drop48 = fluentIcon(name = "Filled.Drop48", 48f) {
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
      }
    }
    return _drop48!!
  }

private var _drop48: ImageVector? = null
