package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentHeart24: ImageVector
  get() {
    if (_documentHeart24 != null) {
      return _documentHeart24!!
    }
    _documentHeart24 = fluentIcon(name = "Filled.DocumentHeart24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.896F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(9.49F)
          lineToRelative(3.17F, -3.17F)
          curveToRelative(1.745F, -1.745F, 1.745F, -4.573F, 0.0F, -6.318F)
          curveToRelative(-1.535F, -1.535F, -3.909F, -1.719F, -5.645F, -0.552F)
          curveTo(6.113F, 11.354F, 5.039F, 11.112F, 4.0F, 11.235F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, 0.896F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(6.0F)
          close()
          moveToRelative(1.5F, 0.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(5.5F)
          lineToRelative(-6.0F, -6.0F)
          close()
          moveTo(7.015F, 22.75F)
          curveToRelative(-0.192F, 0.0F, -0.384F, -0.073F, -0.53F, -0.22F)
          lineToRelative(-4.41F, -4.408F)
          curveToRelative(-1.353F, -1.354F, -1.353F, -3.549F, 0.0F, -4.903F)
          curveToRelative(1.355F, -1.353F, 3.55F, -1.353F, 4.904F, 0.0F)
          lineToRelative(0.036F, 0.036F)
          lineToRelative(0.036F, -0.036F)
          curveToRelative(1.353F, -1.353F, 3.548F, -1.353F, 4.902F, 0.0F)
          curveToRelative(1.354F, 1.354F, 1.354F, 3.55F, 0.0F, 4.903F)
          lineTo(7.545F, 22.53F)
          curveToRelative(-0.146F, 0.147F, -0.338F, 0.22F, -0.53F, 0.22F)
          close()        
      }
    }
    return _documentHeart24!!
  }

private var _documentHeart24: ImageVector? = null
