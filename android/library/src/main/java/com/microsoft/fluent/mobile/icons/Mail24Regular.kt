package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Mail24: ImageVector
  get() {
    if (_mail24 != null) {
      return _mail24!!
    }
    _mail24 = fluentIcon(name = "Regular.Mail24", 24f) {
      materialPath {
          moveTo(5.25F, 4.0F)
          horizontalLineToRelative(13.5F)
          curveToRelative(1.733F, 0.0F, 3.15F, 1.356F, 3.245F, 3.066F)
          lineTo(22.0F, 7.25F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 1.733F, -1.357F, 3.15F, -3.066F, 3.245F)
          lineTo(18.75F, 20.0F)
          horizontalLineTo(5.25F)
          curveToRelative(-1.733F, 0.0F, -3.15F, -1.357F, -3.245F, -3.066F)
          lineTo(2.0F, 16.75F)
          verticalLineToRelative(-9.5F)
          curveTo(2.0F, 5.517F, 3.357F, 4.1F, 5.066F, 4.005F)
          lineTo(5.25F, 4.0F)
          horizontalLineToRelative(13.5F)
          close()
          moveTo(20.5F, 9.373F)
          lineToRelative(-8.15F, 4.29F)
          curveToRelative(-0.188F, 0.1F, -0.407F, 0.113F, -0.603F, 0.043F)
          lineToRelative(-0.096F, -0.042F)
          lineTo(3.5F, 9.374F)
          verticalLineToRelative(7.376F)
          curveToRelative(0.0F, 0.918F, 0.707F, 1.671F, 1.606F, 1.744F)
          lineTo(5.25F, 18.5F)
          horizontalLineToRelative(13.5F)
          curveToRelative(0.918F, 0.0F, 1.671F, -0.707F, 1.744F, -1.607F)
          lineTo(20.5F, 16.75F)
          verticalLineTo(9.373F)
          close()
          moveTo(18.75F, 5.5F)
          horizontalLineTo(5.25F)
          curveToRelative(-0.918F, 0.0F, -1.671F, 0.707F, -1.744F, 1.606F)
          lineTo(3.5F, 7.25F)
          verticalLineToRelative(0.429F)
          lineToRelative(8.5F, 4.473F)
          lineToRelative(8.5F, -4.474F)
          verticalLineTo(7.25F)
          curveToRelative(0.0F, -0.918F, -0.707F, -1.671F, -1.607F, -1.744F)
          lineTo(18.75F, 5.5F)
          close()        
      }
    }
    return _mail24!!
  }

private var _mail24: ImageVector? = null
