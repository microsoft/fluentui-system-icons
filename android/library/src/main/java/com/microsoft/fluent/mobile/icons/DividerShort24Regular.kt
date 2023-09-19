package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DividerShort24: ImageVector
  get() {
    if (_dividerShort24 != null) {
      return _dividerShort24!!
    }
    _dividerShort24 = fluentIcon(name = "Regular.DividerShort24", 24f) {
      materialPath {
          moveTo(11.25F, 4.75F)
          verticalLineToRelative(14.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(4.75F)
          curveTo(12.75F, 4.336F, 12.414F, 4.0F, 12.0F, 4.0F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          close()        
      }
    }
    return _dividerShort24!!
  }

private var _dividerShort24: ImageVector? = null
