package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MailRead48: ImageVector
  get() {
    if (_mailRead48 != null) {
      return _mailRead48!!
    }
    _mailRead48 = fluentIcon(name = "Regular.MailRead48", 48f) {
      materialPath {
          moveTo(24.629F, 6.17F)
          lineToRelative(14.762F, 8.593F)
          curveTo(41.006F, 15.703F, 42.0F, 17.43F, 42.0F, 19.3F)
          verticalLineToRelative(15.45F)
          curveToRelative(0.0F, 2.347F, -1.903F, 4.25F, -4.25F, 4.25F)
          horizontalLineToRelative(-27.5F)
          curveTo(7.903F, 39.0F, 6.0F, 37.097F, 6.0F, 34.75F)
          verticalLineTo(19.3F)
          curveToRelative(0.0F, -1.869F, 0.994F, -3.597F, 2.609F, -4.537F)
          lineTo(23.37F, 6.17F)
          curveToRelative(0.389F, -0.227F, 0.87F, -0.227F, 1.258F, 0.0F)
          close()
          moveTo(39.5F, 20.232F)
          lineToRelative(-14.874F, 8.6F)
          curveToRelative(-0.344F, 0.2F, -0.76F, 0.221F, -1.12F, 0.066F)
          lineToRelative(-0.132F, -0.066F)
          lineTo(8.5F, 20.233F)
          verticalLineTo(34.75F)
          curveToRelative(0.0F, 0.967F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(27.5F)
          curveToRelative(0.967F, 0.0F, 1.75F, -0.783F, 1.75F, -1.75F)
          verticalLineTo(20.232F)
          close()
          moveTo(24.0F, 8.696F)
          lineTo(9.867F, 16.923F)
          curveToRelative(-0.327F, 0.19F, -0.605F, 0.442F, -0.824F, 0.736F)
          lineTo(24.0F, 26.306F)
          lineToRelative(14.957F, -8.647F)
          curveToRelative(-0.219F, -0.294F, -0.497F, -0.546F, -0.824F, -0.736F)
          lineTo(24.0F, 8.696F)
          close()        
      }
    }
    return _mailRead48!!
  }

private var _mailRead48: ImageVector? = null
