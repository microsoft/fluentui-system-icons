package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextBulletListRtl16: ImageVector
  get() {
    if (_textBulletListRtl16 != null) {
      return _textBulletListRtl16!!
    }
    _textBulletListRtl16 = fluentIcon(name = "Regular.TextBulletListRtl16", 16f) {
      materialPath {
          moveTo(14.0F, 4.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          close()
          moveTo(14.0F, 9.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          close()
          moveToRelative(-1.0F, 3.5F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          close()
          moveTo(10.5F, 3.0F)
          curveTo(10.776F, 3.0F, 11.0F, 3.224F, 11.0F, 3.5F)
          reflectiveCurveTo(10.776F, 4.0F, 10.5F, 4.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(1.224F, 4.0F, 1.0F, 3.776F, 1.0F, 3.5F)
          reflectiveCurveTo(1.224F, 3.0F, 1.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveTo(11.0F, 8.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(1.224F, 7.5F, 1.0F, 7.724F, 1.0F, 8.0F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(9.0F)
          curveTo(10.776F, 8.5F, 11.0F, 8.276F, 11.0F, 8.0F)
          close()
          moveToRelative(-0.5F, 4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(10.776F, 13.0F, 10.5F, 13.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(1.224F, 13.0F, 1.0F, 12.776F, 1.0F, 12.5F)
          reflectiveCurveTo(1.224F, 12.0F, 1.5F, 12.0F)
          horizontalLineToRelative(9.0F)
          close()        
      }
    }
    return _textBulletListRtl16!!
  }

private var _textBulletListRtl16: ImageVector? = null
