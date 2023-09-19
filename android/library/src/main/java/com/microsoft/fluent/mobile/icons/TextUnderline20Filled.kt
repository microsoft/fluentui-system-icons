package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextUnderline20: ImageVector
  get() {
    if (_textUnderline20 != null) {
      return _textUnderline20!!
    }
    _textUnderline20 = fluentIcon(name = "Filled.TextUnderline20", 20f) {
      materialPath {
          moveTo(6.5F, 3.75F)
          curveTo(6.5F, 3.336F, 6.164F, 3.0F, 5.75F, 3.0F)
          reflectiveCurveTo(5.0F, 3.336F, 5.0F, 3.75F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, 1.367F, 0.339F, 2.736F, 1.16F, 3.78F)
          curveToRelative(0.843F, 1.07F, 2.132F, 1.72F, 3.84F, 1.72F)
          curveToRelative(1.708F, 0.0F, 2.997F, -0.65F, 3.84F, -1.72F)
          curveTo(14.66F, 11.736F, 15.0F, 10.367F, 15.0F, 9.0F)
          verticalLineTo(3.75F)
          curveTo(15.0F, 3.336F, 14.664F, 3.0F, 14.25F, 3.0F)
          reflectiveCurveTo(13.5F, 3.336F, 13.5F, 3.75F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, 1.143F, -0.286F, 2.15F, -0.84F, 2.853F)
          curveTo(12.129F, 12.529F, 11.293F, 13.0F, 10.0F, 13.0F)
          reflectiveCurveToRelative(-2.128F, -0.47F, -2.66F, -1.147F)
          curveTo(6.785F, 11.149F, 6.5F, 10.143F, 6.5F, 9.0F)
          verticalLineTo(3.75F)
          close()
          moveTo(5.75F, 15.5F)
          curveTo(5.336F, 15.5F, 5.0F, 15.836F, 5.0F, 16.25F)
          reflectiveCurveTo(5.336F, 17.0F, 5.75F, 17.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-8.5F)
          close()        
      }
    }
    return _textUnderline20!!
  }

private var _textUnderline20: ImageVector? = null
