package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Cloud32: ImageVector
  get() {
    if (_cloud32 != null) {
      return _cloud32!!
    }
    _cloud32 = fluentIcon(name = "Filled.Cloud32", 32f) {
      materialPath {
          moveTo(9.851F, 8.742F)
          curveTo(11.166F, 7.134F, 13.201F, 6.0F, 16.0F, 6.0F)
          curveToRelative(1.7F, 0.0F, 3.682F, 0.561F, 5.258F, 1.851F)
          curveToRelative(1.421F, 1.163F, 2.473F, 2.887F, 2.697F, 5.206F)
          curveToRelative(1.378F, 0.165F, 2.714F, 0.683F, 3.781F, 1.508F)
          curveTo(29.063F, 15.589F, 30.0F, 17.114F, 30.0F, 19.0F)
          curveToRelative(0.0F, 1.754F, -0.584F, 3.303F, -1.844F, 4.399F)
          curveTo(26.916F, 24.477F, 25.15F, 25.0F, 23.0F, 25.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-2.707F, 0.0F, -4.515F, -0.82F, -5.628F, -2.091F)
          curveTo(2.284F, 21.665F, 2.0F, 20.145F, 2.0F, 19.0F)
          curveToRelative(0.0F, -2.356F, 1.93F, -5.53F, 6.057F, -5.953F)
          curveToRelative(0.172F, -1.456F, 0.74F, -3.016F, 1.794F, -4.305F)
          close()        
      }
    }
    return _cloud32!!
  }

private var _cloud32: ImageVector? = null
