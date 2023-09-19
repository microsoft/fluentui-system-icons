package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageCircle20: ImageVector
  get() {
    if (_imageCircle20 != null) {
      return _imageCircle20!!
    }
    _imageCircle20 = fluentIcon(name = "Filled.ImageCircle20", 20f) {
      materialPath {
          moveTo(18.0F, 10.0F)
          curveToRelative(0.0F, 2.028F, -0.755F, 3.88F, -1.998F, 5.29F)
          lineToRelative(-4.95F, -4.871F)
          curveToRelative(-0.583F, -0.575F, -1.52F, -0.575F, -2.104F, 0.0F)
          lineToRelative(-4.95F, 4.871F)
          curveTo(2.755F, 13.88F, 2.0F, 12.028F, 2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          close()
          moveToRelative(-7.649F, 1.131F)
          lineToRelative(4.944F, 4.866F)
          curveTo(13.885F, 17.244F, 12.03F, 18.0F, 10.0F, 18.0F)
          reflectiveCurveToRelative(-3.884F, -0.756F, -5.295F, -2.003F)
          lineToRelative(4.945F, -4.866F)
          curveToRelative(0.194F, -0.191F, 0.506F, -0.191F, 0.701F, 0.0F)
          close()
          moveTo(12.75F, 8.5F)
          curveTo(13.44F, 8.5F, 14.0F, 7.94F, 14.0F, 7.25F)
          reflectiveCurveTo(13.44F, 6.0F, 12.75F, 6.0F)
          reflectiveCurveTo(11.5F, 6.56F, 11.5F, 7.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          close()        
      }
    }
    return _imageCircle20!!
  }

private var _imageCircle20: ImageVector? = null
