package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Warning16: ImageVector
  get() {
    if (_warning16 != null) {
      return _warning16!!
    }
    _warning16 = fluentIcon(name = "Regular.Warning16", 16f) {
      materialPath {
          moveTo(8.75F, 10.25F)
          curveTo(8.75F, 10.664F, 8.414F, 11.0F, 8.0F, 11.0F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          curveTo(7.25F, 9.835F, 7.586F, 9.5F, 8.0F, 9.5F)
          reflectiveCurveToRelative(0.75F, 0.335F, 0.75F, 0.75F)
          close()
          moveTo(7.5F, 8.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveTo(8.5F, 8.276F, 8.5F, 8.0F)
          verticalLineTo(5.5F)
          curveTo(8.5F, 5.224F, 8.276F, 5.0F, 8.0F, 5.0F)
          reflectiveCurveTo(7.5F, 5.224F, 7.5F, 5.5F)
          verticalLineTo(8.0F)
          close()
          moveTo(6.909F, 2.637F)
          curveToRelative(0.477F, -0.853F, 1.705F, -0.853F, 2.182F, 0.0F)
          lineToRelative(4.75F, 8.502F)
          curveToRelative(0.466F, 0.833F, -0.136F, 1.86F, -1.09F, 1.86F)
          horizontalLineTo(3.246F)
          curveToRelative(-0.955F, 0.0F, -1.557F, -1.027F, -1.091F, -1.86F)
          lineToRelative(4.753F, -8.502F)
          close()
          moveToRelative(1.309F, 0.488F)
          curveToRelative(-0.095F, -0.17F, -0.341F, -0.17F, -0.437F, 0.0F)
          lineTo(3.03F, 11.627F)
          curveToRelative(-0.093F, 0.166F, 0.027F, 0.372F, 0.218F, 0.372F)
          horizontalLineToRelative(9.503F)
          curveToRelative(0.191F, 0.0F, 0.312F, -0.206F, 0.218F, -0.372F)
          lineToRelative(-4.75F, -8.502F)
          close()        
      }
    }
    return _warning16!!
  }

private var _warning16: ImageVector? = null
