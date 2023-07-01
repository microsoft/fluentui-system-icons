package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Broom24: ImageVector
  get() {
    if (_broom24 != null) {
      return _broom24!!
    }
    _broom24 = fluentIcon(name = "Filled.Broom24", 24f) {
      materialPath {
          moveTo(22.453F, 1.923F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.768F, 0.0F, 1.06F)
          lineTo(16.14F, 9.297F)
          curveToRelative(-0.146F, -0.181F, -0.304F, -0.356F, -0.472F, -0.524F)
          curveToRelative(-0.19F, -0.19F, -0.39F, -0.367F, -0.596F, -0.53F)
          lineToRelative(6.32F, -6.32F)
          curveToRelative(0.294F, -0.293F, 0.768F, -0.293F, 1.061F, 0.0F)
          close()
          moveTo(15.03F, 9.347F)
          curveToRelative(-2.246F, -2.245F, -5.886F, -2.245F, -8.132F, 0.0F)
          lineTo(6.653F, 9.591F)
          lineToRelative(8.132F, 8.132F)
          lineToRelative(0.244F, -0.244F)
          curveToRelative(2.245F, -2.245F, 2.245F, -5.886F, 0.0F, -8.132F)
          close()
          moveTo(1.885F, 12.966F)
          lineToRelative(3.613F, -2.409F)
          lineToRelative(8.32F, 8.321F)
          lineToRelative(-2.408F, 3.613F)
          curveToRelative(-0.124F, 0.187F, -0.326F, 0.308F, -0.55F, 0.33F)
          curveToRelative(-0.224F, 0.023F, -0.445F, -0.056F, -0.604F, -0.215F)
          lineTo(1.77F, 14.12F)
          curveToRelative(-0.158F, -0.159F, -0.238F, -0.38F, -0.216F, -0.604F)
          curveToRelative(0.023F, -0.223F, 0.144F, -0.425F, 0.33F, -0.55F)
          close()        
      }
    }
    return _broom24!!
  }

private var _broom24: ImageVector? = null
