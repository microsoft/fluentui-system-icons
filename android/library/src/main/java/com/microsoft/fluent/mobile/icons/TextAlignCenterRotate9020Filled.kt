package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextAlignCenterRotate9020: ImageVector
  get() {
    if (_textAlignCenterRotate9020 != null) {
      return _textAlignCenterRotate9020!!
    }
    _textAlignCenterRotate9020 = fluentIcon(name = "Filled.TextAlignCenterRotate9020", 9020f) {
      materialPath {
          moveTo(15.75F, 4.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(15.0F, 15.664F, 15.0F, 15.25F)
          verticalLineTo(4.75F)
          curveTo(15.0F, 4.336F, 15.336F, 4.0F, 15.75F, 4.0F)
          close()
          moveToRelative(-5.0F, -2.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(14.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(10.0F, 17.664F, 10.0F, 17.25F)
          verticalLineTo(2.75F)
          curveTo(10.0F, 2.336F, 10.336F, 2.0F, 10.75F, 2.0F)
          close()
          moveTo(6.5F, 6.75F)
          curveTo(6.5F, 6.336F, 6.164F, 6.0F, 5.75F, 6.0F)
          reflectiveCurveTo(5.0F, 6.336F, 5.0F, 6.75F)
          verticalLineToRelative(6.5F)
          curveTo(5.0F, 13.664F, 5.336F, 14.0F, 5.75F, 14.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-6.5F)
          close()        
      }
    }
    return _textAlignCenterRotate9020!!
  }

private var _textAlignCenterRotate9020: ImageVector? = null
