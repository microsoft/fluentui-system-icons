package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DividerTall16: ImageVector
  get() {
    if (_dividerTall16 != null) {
      return _dividerTall16!!
    }
    _dividerTall16 = fluentIcon(name = "Filled.DividerTall16", 16f) {
      materialPath {
          moveTo(7.75F, 1.0F)
          curveTo(8.164F, 1.0F, 8.5F, 1.336F, 8.5F, 1.75F)
          verticalLineToRelative(12.5F)
          curveTo(8.5F, 14.664F, 8.164F, 15.0F, 7.75F, 15.0F)
          reflectiveCurveTo(7.0F, 14.664F, 7.0F, 14.25F)
          verticalLineTo(1.75F)
          curveTo(7.0F, 1.336F, 7.336F, 1.0F, 7.75F, 1.0F)
          close()        
      }
    }
    return _dividerTall16!!
  }

private var _dividerTall16: ImageVector? = null
