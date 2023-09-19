package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DividerShort16: ImageVector
  get() {
    if (_dividerShort16 != null) {
      return _dividerShort16!!
    }
    _dividerShort16 = fluentIcon(name = "Filled.DividerShort16", 16f) {
      materialPath {
          moveTo(7.75F, 3.0F)
          curveTo(8.164F, 3.0F, 8.5F, 3.336F, 8.5F, 3.75F)
          verticalLineToRelative(8.5F)
          curveTo(8.5F, 12.664F, 8.164F, 13.0F, 7.75F, 13.0F)
          reflectiveCurveTo(7.0F, 12.664F, 7.0F, 12.25F)
          verticalLineToRelative(-8.5F)
          curveTo(7.0F, 3.336F, 7.336F, 3.0F, 7.75F, 3.0F)
          close()        
      }
    }
    return _dividerShort16!!
  }

private var _dividerShort16: ImageVector? = null
