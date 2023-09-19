package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailOff24: ImageVector
  get() {
    if (_mailOff24 != null) {
      return _mailOff24!!
    }
    _mailOff24 = fluentIcon(name = "Filled.MailOff24", 24f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(1.25F, 1.25F)
          curveToRelative(-0.8F, 0.525F, -1.354F, 1.392F, -1.454F, 2.394F)
          lineToRelative(8.078F, 4.231F)
          lineToRelative(2.422F, 2.421F)
          lineToRelative(-0.168F, 0.088F)
          curveToRelative(-0.218F, 0.115F, -0.478F, 0.115F, -0.696F, 0.0F)
          lineTo(2.0F, 8.608F)
          verticalLineToRelative(8.142F)
          lineToRelative(0.005F, 0.184F)
          curveTo(2.101F, 18.644F, 3.517F, 20.0F, 5.25F, 20.0F)
          horizontalLineToRelative(13.5F)
          lineToRelative(0.184F, -0.005F)
          lineToRelative(1.785F, 1.785F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          close()
          moveToRelative(12.02F, 9.898F)
          lineToRelative(6.262F, 6.262F)
          curveTo(21.84F, 17.901F, 22.0F, 17.344F, 22.0F, 16.75F)
          verticalLineTo(8.608F)
          lineToRelative(-6.7F, 3.51F)
          close()
          moveTo(7.182F, 4.0F)
          lineToRelative(7.007F, 7.007F)
          lineToRelative(7.795F, -4.083F)
          curveTo(21.82F, 5.282F, 20.434F, 4.0F, 18.75F, 4.0F)
          horizontalLineTo(7.182F)
          close()        
      }
    }
    return _mailOff24!!
  }

private var _mailOff24: ImageVector? = null
