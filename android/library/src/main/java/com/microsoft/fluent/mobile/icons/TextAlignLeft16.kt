package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextAlignLeft16: ImageVector
  get() {
    if (_textAlignLeft16 != null) {
      return _textAlignLeft16!!
    }
    _textAlignLeft16 = fluentIcon(name = "Filled.TextAlignLeft16", 16f) {
      materialPath {
          moveTo(1.0F, 3.75F)
          curveTo(1.0F, 3.336F, 1.336F, 3.0F, 1.75F, 3.0F)
          horizontalLineToRelative(8.5F)
          curveTo(10.664F, 3.0F, 11.0F, 3.336F, 11.0F, 3.75F)
          reflectiveCurveTo(10.664F, 4.5F, 10.25F, 4.5F)
          horizontalLineToRelative(-8.5F)
          curveTo(1.336F, 4.5F, 1.0F, 4.164F, 1.0F, 3.75F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(1.0F, 7.336F, 1.336F, 7.0F, 1.75F, 7.0F)
          horizontalLineToRelative(12.5F)
          curveTo(14.664F, 7.0F, 15.0F, 7.336F, 15.0F, 7.75F)
          reflectiveCurveTo(14.664F, 8.5F, 14.25F, 8.5F)
          horizontalLineTo(1.75F)
          curveTo(1.336F, 8.5F, 1.0F, 8.164F, 1.0F, 7.75F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(1.0F, 11.336F, 1.336F, 11.0F, 1.75F, 11.0F)
          horizontalLineToRelative(4.5F)
          curveTo(6.664F, 11.0F, 7.0F, 11.336F, 7.0F, 11.75F)
          reflectiveCurveTo(6.664F, 12.5F, 6.25F, 12.5F)
          horizontalLineToRelative(-4.5F)
          curveTo(1.336F, 12.5F, 1.0F, 12.164F, 1.0F, 11.75F)
          close()        
      }
    }
    return _textAlignLeft16!!
  }

private var _textAlignLeft16: ImageVector? = null
