package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Mail32: ImageVector
  get() {
    if (_mail32 != null) {
      return _mail32!!
    }
    _mail32 = fluentIcon(name = "Filled.Mail32", 32f) {
      materialPath {
          moveTo(2.004F, 9.303F)
          curveTo(2.107F, 6.909F, 4.081F, 5.0F, 6.5F, 5.0F)
          horizontalLineToRelative(19.0F)
          curveToRelative(2.42F, 0.0F, 4.393F, 1.909F, 4.496F, 4.303F)
          lineToRelative(-1.476F, 0.82F)
          lineTo(16.0F, 16.864F)
          lineTo(3.48F, 10.123F)
          lineToRelative(-1.476F, -0.82F)
          close()
          moveTo(2.0F, 11.588F)
          verticalLineTo(22.5F)
          curveTo(2.0F, 24.985F, 4.015F, 27.0F, 6.5F, 27.0F)
          horizontalLineToRelative(19.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineTo(11.588F)
          lineToRelative(-0.526F, 0.293F)
          lineToRelative(-13.0F, 7.0F)
          curveToRelative(-0.296F, 0.159F, -0.652F, 0.159F, -0.948F, 0.0F)
          lineTo(2.514F, 11.874F)
          lineTo(2.0F, 11.588F)
          close()        
      }
    }
    return _mail32!!
  }

private var _mail32: ImageVector? = null
