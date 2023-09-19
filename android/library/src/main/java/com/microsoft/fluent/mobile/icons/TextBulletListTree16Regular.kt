package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextBulletListTree16: ImageVector
  get() {
    if (_textBulletListTree16 != null) {
      return _textBulletListTree16!!
    }
    _textBulletListTree16 = fluentIcon(name = "Regular.TextBulletListTree16", 16f) {
      materialPath {
          moveTo(2.0F, 4.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          close()
          moveTo(2.0F, 9.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveTo(2.552F, 7.0F, 2.0F, 7.0F)
          reflectiveCurveTo(1.0F, 7.448F, 1.0F, 8.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          close()
          moveToRelative(5.0F, 3.5F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()
          moveTo(5.5F, 3.0F)
          curveTo(5.224F, 3.0F, 5.0F, 3.224F, 5.0F, 3.5F)
          reflectiveCurveTo(5.224F, 4.0F, 5.5F, 4.0F)
          horizontalLineToRelative(9.0F)
          curveTo(14.776F, 4.0F, 15.0F, 3.776F, 15.0F, 3.5F)
          reflectiveCurveTo(14.776F, 3.0F, 14.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          close()
          moveTo(5.0F, 8.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(9.0F)
          curveTo(14.776F, 7.5F, 15.0F, 7.724F, 15.0F, 8.0F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(5.224F, 8.5F, 5.0F, 8.276F, 5.0F, 8.0F)
          close()
          moveToRelative(4.5F, 4.0F)
          curveTo(9.224F, 12.0F, 9.0F, 12.224F, 9.0F, 12.5F)
          reflectiveCurveTo(9.224F, 13.0F, 9.5F, 13.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(14.776F, 12.0F, 14.5F, 12.0F)
          horizontalLineToRelative(-5.0F)
          close()        
      }
    }
    return _textBulletListTree16!!
  }

private var _textBulletListTree16: ImageVector? = null
